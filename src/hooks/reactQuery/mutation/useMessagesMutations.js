import { sendMessage } from '@api/DiscussionsApi';
import { discussionsQKey } from '@stores/ReactQueryKEYS';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostMessagesMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (message) => sendMessage(message),
    onSuccess: (savedMessage) => {
      queryClient.setQueryData(discussionsQKey.ofUser(savedMessage.id), savedMessage);
    }
  });
};
