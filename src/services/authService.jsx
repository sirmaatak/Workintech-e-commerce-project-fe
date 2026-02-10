import { api } from "../api/axiosInstance";

export const fetchRoles = () => api.get("/roles");
export const signupRequest = (payload) => api.post("/signup", payload);
