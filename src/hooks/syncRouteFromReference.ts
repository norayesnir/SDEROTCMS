import { CollectionBeforeValidateHook } from 'payload';

export const syncRouteFromReference: CollectionBeforeValidateHook = async ({
    data,
    req,
}) => {
    // Guard: if we've already synced this document in this request cycle, skip further processing.

    if (!data) return;
    if (data.__routeSynced) {
        delete data.__routeSynced;
        return data;
    }

    // Only proceed if a reference is provided.
    if (!data.referenceToPage) return data;

    try {
        // Fetch the referenced page from the 'pages' collection.
        const referencedPage = await req.payload.findByID({
            collection: 'pages',
            id: data.referenceToPage,
        });

        // If no referenced page is found, simply return the data.
        if (!referencedPage) return data;

        // Determine the route from the referenced page – adjust the field names as needed.
        const computedRoute = referencedPage.route || referencedPage.slug;

        // Only update if computedRoute exists and it’s different from what’s already in data.
        if (computedRoute && data.route !== computedRoute) {
            data.route = computedRoute;
            // Mark that we have synced the route to prevent recursive hook calls.
            data.__routeSynced = true;
        }
    } catch (err) {
        console.error('Error syncing route from referenceToPage:', err);
    }
    return data;
};
