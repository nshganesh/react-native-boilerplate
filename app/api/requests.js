import axios from "axios";

var instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 3000,
  headers: { "Content-Type": "application/json" }
});

export const getRequest = (sub_service_type, params = {}) => {
  return instance
      .get(sub_service_type, {
        params: params
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return Promise.reject(error);
      });
};

export const postRequest = (sub_service_type, params = {}) => {
  return instance({
    method: "POST",
    url: sub_service_type,
    data: params
  })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return Promise.reject(error);
      });
};