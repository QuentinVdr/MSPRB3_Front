import { ImgBBClient } from './client/ImgBBClient';

const imageUploadUrl = '/upload';

/**
 * Upload an image to the ImgBB API.
 *
 * @param image The image to upload
 * @param expiration The expiration time of the image
 * @returns The response from the ImgBB API
 */
export const uploadImage = (image, expiration) => {
  let body = new FormData();
  body.set('expiration', expiration);
  body.append('image', image);

  return ImgBBClient.post(imageUploadUrl, body).then((res) => res.data);
};
