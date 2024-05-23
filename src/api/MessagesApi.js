import { MessagesClient } from './client/MessagesClient';

export const getMessagesWithUser = (userId, otherId) =>
  MessagesClient.get(`/messages/${userId}/${otherId}`).then((res) => res.data);

export const sendMessage = (message) => MessagesClient.post(`/messages`, { message }).then((res) => res.data);
