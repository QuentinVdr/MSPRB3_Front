import { sendMessage } from '@api/MessagesApi';
import { messagesQKey } from '@stores/ReactQueryKEYS';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostMessagesMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (message) => sendMessage(message),
    onSuccess: (savedMessage) => {
      queryClient.setQueryData(messagesQKey.withUser(savedMessage.id), savedMessage);
    }
  });
};
