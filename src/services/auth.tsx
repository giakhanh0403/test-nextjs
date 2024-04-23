import { API_URL } from "../constants";
import axiosClient from "./axiosClients";

type AuthType = {
  access_token: string;
  refresh_token: string;
};

export const loginApi = (email: string, password: string) =>
  axiosClient.post(`${API_URL}/auth/login`, {
    email,
    password,
  });

export const refreshTokenApi = () =>
  axiosClient.get(`${API_URL}/auth/refresh-token`);
