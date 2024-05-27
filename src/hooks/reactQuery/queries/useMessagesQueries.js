import { getMessagesWithUser } from '@api/MessagesApi';
import { messagesQKey } from '@stores/ReactQueryKEYS';
import { useQuery } from '@tanstack/react-query';

export const useMessagesQuery = (userId, otherId, options) =>
  useQuery({
    ...options,
    cacheTime: 1000, // 1 second
    staleTime: 1000, // 1 second
    queryKey: messagesQKey.withUser(userId, otherId),
    queryFn: () => getMessagesWithUser(userId, otherId)
  });
