import axios from 'axios';

/** The configured Axios instance. */
export const ImgBBClient = axios.create({
  baseURL: import.meta.env.VITE_API_IMGBB_URL,
  params: {
    key: import.meta.env.VITE_API_IMGBB_KEY
  }
});
