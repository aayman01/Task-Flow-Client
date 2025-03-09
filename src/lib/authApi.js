import api from "./api";

export const register = async (email, password) => {
  return await api.post("/auth/register", { email, password });
};

export const loginUser = async (email, password) => {
  return await api.post(
    "/auth/login",
    { email, password },
    { withCredentials: true }
  );
};

export const authStatus = async () => {
  return await api.get("/auth/status", { withCredentials: true });
};
export const logoutUser = async () => {
  return await api.post("/auth/logout", {},{ withCredentials: true });
};
export const setup2FA = async () => {
  return await api.post("/auth/2fa/setup", {},{ withCredentials: true });
};
export const verify2FA = async (token) => {
  return await api.post("/auth/2fa/verify", {token},{ withCredentials: true });
};
export const reset2FA = async () => {
  return await api.post("/auth/2fa/reset", {},{ withCredentials: true });
};
export const verifyEmail = async (code) => {
  return await api.post("/auth/verify-email", {code},{ withCredentials: true });
};

