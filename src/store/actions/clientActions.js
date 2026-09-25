import axiosInstance from "../../api/axiosInstance";

export const setUser = (user) => ({ type: "SET_USER", payload: user });
export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme });
export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles });

export const fetchRoles = () => async (dispatch, getState) => {
  const { roles } = getState().client;
  if (roles && roles.length > 0) {
    return;
  }
  try {
    const response = await axiosInstance.get("/roles");
    dispatch(setRoles(response.data));
  } catch (error) {
    console.error("Roller çekilirken hata: ", error.response?.data);
  }
};

export const loginUser = (formData) => async (dispatch) => {
  dispatch({ type: "LOGIN_START", isLoading: true });

  try {
    const response = await axiosInstance.post("/login", formData);
    localStorage.setItem("token", response.data.token);
    dispatch(setUser(response.data));
    console.log("Giriş Başarılı", response.data);
    return response;
  } catch (error) {
    console.error("Giriş hatası: ", error.response?.data);
    throw error;
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(setUser({}));

  console.log("✅ Çıkış yapıldı, kullanıcı silindi.");
};
