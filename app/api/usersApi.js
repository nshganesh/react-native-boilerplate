import { getRequest, } from "./requests.js";

export const fetchUsers = (page, limit) => {
  return getRequest(`users`);
};