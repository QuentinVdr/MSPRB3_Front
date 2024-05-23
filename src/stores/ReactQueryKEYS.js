/**
 * This file should contains all the factory to build react query keys
 */

/** Exemple */
export const exempleQKey = {
  mainKey: 'exemple',
  list: () => [exempleQKey.mainKey, 'list'],
  detail: (id) => [exempleQKey.mainKey, 'detail', id]
};

/** Messages */
export const messagesQKey = {
  mainKey: 'messages',
  withUser: (userId, otherId) => [messagesQKey.mainKey, 'detail', [userId, otherId]]
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
