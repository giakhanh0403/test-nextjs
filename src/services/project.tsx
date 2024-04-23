import { API_URL } from "../constants";
import axiosClient from "./axiosClients";

export const getProjectsApi = () => axiosClient.get(`${API_URL}/projects`);
