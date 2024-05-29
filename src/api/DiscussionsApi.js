import { DiscussionsClient } from './client/DiscussionsClient';

export const getDiscussionsOfUser = (userId) => DiscussionsClient.get(`/discussions/${userId}`).then((res) => res.data);

export const getDiscussionsBetweenUsers = (userId, otherId) =>
  DiscussionsClient.get(`/discussions/${userId}/${otherId}`).then((res) => res.data);

export const sendMessage = (message) =>
  DiscussionsClient.post(`/discussions/${message.discussionId}/messages`, { message }).then((res) => res.data);
