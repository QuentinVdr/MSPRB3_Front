import { uploadImage } from '@api/ImgBBApi';
import { exempleQKey } from '@stores/ReactQueryKEYS';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUploadImageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (image, expiration) => uploadImage(image, expiration),
    onSuccess: (savedImage) => {
      queryClient.setQueryData(exempleQKey.detail(savedImage.id), savedImage);
    }
  });
};

export const useUploadImagesMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (images, expiration) => {
      return await Promise.all(
        images.map(async (image) => {
          return await uploadImage(image, expiration);
        })
      );
    },
    onSuccess: (savedImages) => {
      savedImages.forEach((savedImage) => {
        queryClient.setQueryData(exempleQKey.detail(savedImage.data.id), savedImage.data);
      });
    }
  });
};
