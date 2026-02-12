import { api } from "../../api/axiosInstance";
import { setUser } from "./client.actions";

export const loginUser = (email, password, remember = false) => {
  return async (dispatch) => {
    try {
      const res = await api.post("/login", { email, password });

      const token = res?.data?.token || null;

      const user = {
        name: res?.data?.name,
        email: res?.data?.email,
        role_id: Number(res?.data?.role_id),
      };

      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        if (remember) localStorage.setItem("token", token);
      }

      dispatch(setUser(user));

      return { ok: true, user, token };
    } catch (err) {
      const data = err?.response?.data;
      const msg =
        (typeof data === "string" && data) ||
        data?.message ||
        data?.error ||
        "Login failed";
      return { ok: false, message: msg };
    }
  };
};
