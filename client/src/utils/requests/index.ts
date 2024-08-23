import axios, { AxiosRequestHeaders } from "axios";

const headers: Pick<AxiosRequestHeaders, "Authorization" | "Content-Type"> = {
  Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
  "Content-Type": "application/json",
};

export const getRequest = (url: string) => {
  return axios.get(url, {
    headers,
  });
};

export const postRequest = (url: string, payload: any) => {
  return axios.post(url, payload, {
    headers,
  });
};

export const updateRequest = (url: string, payload: any) => {
  return axios.patch(url, payload, { headers });
};

export const deleteRequest = (url: string) => {
  return axios.delete(url, { headers });
};
