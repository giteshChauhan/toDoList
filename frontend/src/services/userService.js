/** userService file ensures registration of new user */

import http from "./httpService";

const apiEndPoint = "/user/";

// function to register new user
export function register(user) {
  return http.post(apiEndPoint, user);
}
