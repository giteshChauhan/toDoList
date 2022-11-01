/** authService file stores credentials in jwt form in local storage in order to identify user */

import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndPoint = "/login/";
const tokenKey = "token";

http.setJwt(getJwt());

// function to login into users account
export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

// function to directly login using jwt as by new users who just registered
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

// function to logout : simply removing jwt from local storage
export function logout() {
  localStorage.removeItem(tokenKey);
}

// function to get current user info : simply decoding jwt token
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const user = jwtDecode(jwt);
    return user;
  } catch (ex) {
    return undefined;
  }
}

// function to get current users jwt from local storage
export function getJwt() {
  return localStorage.getItem(tokenKey);
}

const auth = {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};

export default auth;
