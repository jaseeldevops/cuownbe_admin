import axios from "axios";

var BASE_URL = "http://core.cuownbe.co.in/a1/";
if (window.location.hostname === "localhost")
  BASE_URL = "http://localhost:9000/a1/";
var TOKEN = "cuownbe i23";
export var USER: any = {};

export const setServiceToken = (res: any) => {
  USER = res;
  TOKEN = res.org + " " + res.id;
  localStorage.setItem("user", JSON.stringify(res));
  localStorage.setItem("token", TOKEN);
};

export const checkAndSetServiceToken = (setScreen: any) => {
  if (!localStorage.getItem("token")) setScreen("login");
  USER = JSON.parse(localStorage.getItem("user") ?? "{}");
  TOKEN = localStorage.getItem("token") ?? "";
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
