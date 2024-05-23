import axios from 'axios';

/** The configured Axios instance. */
export const MessagesClient = axios.create({
  baseURL: import.meta.env.VITE_MESSAGES_API_URL
});
