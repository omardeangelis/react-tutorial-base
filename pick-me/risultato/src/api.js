import axios from "axios";

const activeEnv =
  process.env.REACT_APP_ACTIVE_ENV || process.env.NODE_ENV || `development`;

console.log(`Using environment config: '${activeEnv}'`);

require(`dotenv`).config({
  path: `.env.${activeEnv}`,
});

console.log(process.env.REACT_APP_UNSPLASH_API);

const instance = axios.create({
  baseURL: process.env.REACT_APP_UNSPLASH_API,
  headers: {
    "Content-Type": "application/json",
    "Accept-Version": "v1",
    "Authorization": process.env.REACT_APP_UNSPLASH_CLIENT_ID,
  },
});

export default instance;
