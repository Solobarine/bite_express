import axios, { AxiosRequestHeaders } from "axios";

export const getRequest = (url: string) => {
  const headers: Pick<AxiosRequestHeaders, "Authorization" | "Content-Type"> = {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    "Content-Type": "application/json",
  };
  return axios.get(url, {
    headers,
  });
};

export const postRequest = (url: string, payload: any) => {
  const headers: Pick<AxiosRequestHeaders, "Authorization" | "Content-Type"> = {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    "Content-Type": "application/json",
  };
  return axios.post(url, payload, {
    headers,
  });
};

export const updateRequest = (url: string, payload: any) => {
  const headers: Pick<AxiosRequestHeaders, "Authorization" | "Content-Type"> = {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    "Content-Type": "application/json",
  };
  return axios.patch(url, payload, { headers });
};

export const deleteRequest = (url: string) => {
  const headers: Pick<AxiosRequestHeaders, "Authorization" | "Content-Type"> = {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    "Content-Type": "application/json",
  };
  return axios.delete(url, { headers });
};
