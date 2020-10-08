import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

//Object.keys(shop.collections): Convert the keys of a hash map object into an array 
export const selectCollectionsForPreview = createSelector([selectCollections], collections => collections ? 
    Object.keys(collections).map(key => collections[key]) : []);

// selectCollection does not ge memoized due to the collectionUrlParam which is passed dynamically 
// so to memoize it we have to wrap the function in the memoize method
export const selectCollection = memoize(collectionUrlParam => createSelector([selectCollections], collections => collections ? 
    collections[collectionUrlParam] : null));
