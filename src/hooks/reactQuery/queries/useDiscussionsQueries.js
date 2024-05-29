import { getDiscussionsBetweenUsers, getDiscussionsOfUser } from '@api/DiscussionsApi';
import { discussionsQKey } from '@stores/ReactQueryKEYS';
import { useQuery } from '@tanstack/react-query';

export const useDiscussionsOfUserQuery = (userId, options) =>
  useQuery({
    ...options,
    queryKey: discussionsQKey.ofUser(userId),
    queryFn: () => getDiscussionsOfUser(userId)
  });

export const useDiscussionsBetweenUsersQuery = (userId, otherId, options) =>
  useQuery({
    ...options,
    cacheTime: 1000, // 1 second
    staleTime: 1000, // 1 second
    queryKey: discussionsQKey.betweenUser(userId, otherId),
    queryFn: () => getDiscussionsBetweenUsers(userId, otherId)
  });
