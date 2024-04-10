import { uploadImage } from '@api/ImgBBApi';
import { exempleQKey } from '@stores/ReactQueryKEYS';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUploadImageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (image, expiration) => uploadImage(image, expiration),
    onSuccess: (savedExemple) => {
      queryClient.setQueryData(exempleQKey.detail(savedExemple.id), savedExemple);
    }
  });
};
