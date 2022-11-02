/** userService file ensures registration of new user */

import auth from "./authService";
import http from "./httpService";

const token = auth.getJwt();
const apiEndPoint = "/user/";

// function to register new user
export function register(user) {
  return http.post(apiEndPoint, user);
}

// function to change email or password
export function changeUser(user) {
  return http.put(apiEndPoint, user, token);
}
