import { setRoles } from "./client.actions";
import { api } from "../api/axiosInstance"; // kendi axios instance path'ini kontrol et

export const fetchRolesIfNeeded = () => async (dispatch, getState) => {
  const { roles } = getState().client;


  if (Array.isArray(roles) && roles.length > 0) return;

  const res = await api.get("/roles");
  const list = Array.isArray(res.data) ? res.data : res.data?.roles || [];

  dispatch(setRoles(list));
};
