import axios from "axios";

var BASE_URL = "http://localhost:9000/a1/";
var TOKEN = "cuownbe i23";
export var USER: any = {};

export const setServiceToken = (res: any) => {
  USER = res;
  TOKEN = res.org + " " + res.id;
};

export const httpGet = (endPoint: any, params?: any) => {
  return axios.get(BASE_URL + endPoint, {
    headers: { authKey: TOKEN },
    params,
  });
};
export const httpPost = (endPoint: any, body: any, params?: any) => {
  return axios.post(BASE_URL + endPoint, body, {
    headers: { authKey: TOKEN },
    params,
  });
};
export const httpPut = (endPoint: any, body: any, params?: any) => {
  return axios.put(BASE_URL + endPoint, body, {
    headers: { authKey: TOKEN },
    params,
  });
};
export const httpDelete = (endPoint: any, params?: any) => {
  return axios.delete(BASE_URL + endPoint, {
    headers: { authKey: TOKEN },
    params,
  });
};
