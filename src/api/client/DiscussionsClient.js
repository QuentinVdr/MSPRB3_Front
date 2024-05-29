import axios from 'axios';

/** The configured Axios instance. */
export const DiscussionsClient = axios.create({
  baseURL: import.meta.env.VITE_DISCUSSIONS_API_URL
});
