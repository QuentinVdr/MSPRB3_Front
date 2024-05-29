/**
 * This file should contains all the factory to build react query keys
 */

/** Exemple */
export const exempleQKey = {
  mainKey: 'exemple',
  list: () => [exempleQKey.mainKey, 'list'],
  detail: (id) => [exempleQKey.mainKey, 'detail', id]
};

/** Discussions */
export const discussionsQKey = {
  mainKey: 'discussions',
  ofUser: (userId) => [discussionsQKey.mainKey, 'ofUser', [userId]],
  betweenUser: (userId, otherId) => [discussionsQKey.mainKey, 'betweenUser', [userId, otherId]]
};

/** Geocoging address */
export const addressQKey = {
  mainKey: 'address',
  detail: (address) => [addressQKey.mainKey, 'detail', address]
};

/** ImgBB */
export const imgBBQKey = {
  mainKey: 'imgBB',
  detail: (imgBB) => [imgBBQKey.mainKey, 'detail', imgBB]
};
