/** Setting up http module using axios */

import axios from "axios";
import { toast } from "react-toastify";

const listService = axios.create({ baseURL: process.env.REACT_APP_API_URL });

listService.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) toast("Something failed");
  if (error && (error.response.status === 400 || error.response.status === 401))
    toast(`${error.response.data}`);
  return Promise.reject(error);
});

// function to set jwt private token (auth-token) as recieved from authService file

function setJwt(jwt) {
  listService.defaults.headers.common["auth-token"] = jwt;
}

const http = {
  get: listService.get,
  post: listService.post,
  put: listService.put,
  delete: listService.delete,
  setJwt,
};

export default http;
