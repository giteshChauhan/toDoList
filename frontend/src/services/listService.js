/** List Service as name suggets provides services to perform CRUD operation in list in database */

import http from "./httpService";
import { getJwt, getCurrentUser } from "./authService";

const apiEndPoint = "/list/";
const token = getJwt();

export function sendList(title, items) {
  return http.post(apiEndPoint, { title, items });
}

export function getLists() {
  const user = getCurrentUser();
  if (user) return http.get(apiEndPoint, token);
  return null;
}

export function checkItem(listId, itemId) {
  return http.put(`${apiEndPoint}/check/${listId}/${itemId}`, token);
}

export function deleteList(listId) {
  return http.delete(apiEndPoint + listId, token);
}
