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

export const loginUser = (formData, rememberMe) => async (dispatch) => {
  dispatch({ type: "LOGIN_START", isLoading: true });

  try {
    const response = await axiosInstance.post("/login", formData);

    if (rememberMe) {
      localStorage.setItem("token", response.data.token);
      sessionStorage.removeItem("token");
    } else {
      sessionStorage.setItem("token", response.data.token);
      localStorage.removeItem("token");
    }
    axiosInstance.defaults.headers.common["Authorization"] = response.data.token;

    dispatch(setUser(response.data));
    return response;
  } catch (error) {
    console.error("Giriş hatası: ", error.response?.data);
    throw error;
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  delete axiosInstance.defaults.headers.common["Authorization"];
  dispatch(setUser({}));

};

export const verifyUser = () => async (dispatch) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (!token) {
    return;
  }

  try {
    axiosInstance.defaults.headers.common["Authorization"] = token;

    const response = await axiosInstance.get("/verify");

    const newToken = response.data.token;
    if (localStorage.getItem("token")) {
      localStorage.setItem("token", newToken);
    } else {
      sessionStorage.setItem("token", newToken);
    }
    axiosInstance.defaults.headers.common["Authorization"] = newToken;

    dispatch(setUser(response.data));

  } catch (error) {
    console.error("Auto-login hatası", error);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    delete axiosInstance.defaults.headers.common["Authorization"];
    dispatch(setUser({}));
  }
};

export const fetchAddresses = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/user/address");
    dispatch({ type: "SET_ADDRESS_LIST", payload: response.data });
  } catch (error) {
    console.error("Adresler yüklenemedi:", error);
  }
};

export const addAddress = (addressData) => async (dispatch) => {
  try {
    await axiosInstance.post("/user/address", addressData);
    dispatch(fetchAddresses());
  } catch (error) {
    console.error("Adres eklenemedi:", error.response?.data);
    throw error;
  }
};

export const updateAddress = (addressData) => async (dispatch) => {
  try {
    await axiosInstance.put("/user/address", addressData);
    dispatch(fetchAddresses());
  } catch (error) {
    console.error("Adres güncellenemedi:", error.response?.data);
    throw error;
  }
};

export const deleteAddress = (addressId) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/user/address/${addressId}`);
    dispatch(fetchAddresses());
  } catch (error) {
    console.error("Adres silinemedi:", error.response?.data);
    throw error;
  }
};

export const fetchCards = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/user/card");
    dispatch({ type: "SET_CARD_LIST", payload: response.data });
  } catch (error) {
    console.error("Kartlar yüklenemedi:", error);
  }
};

export const addCard = (cardData) => async (dispatch) => {
  try {
    await axiosInstance.post("/user/card", cardData);
    dispatch(fetchCards());
  } catch (error) {
    console.error("Kart eklenemedi:", error.response?.data);
    throw error;
  }
};

export const updateCard = (cardData) => async (dispatch) => {
  try {
    await axiosInstance.put("/user/card", cardData);
    dispatch(fetchCards());
  } catch (error) {
    console.error("Kart güncellenemedi:", error.response?.data);
    throw error;
  }
};

export const deleteCard = (cardId) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/user/card/${cardId}`);
    dispatch(fetchCards());
  } catch (error) {
    console.error("Kart silinemedi:", error.response?.data);
    throw error;
  }
};

export const createOrder = (orderData) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/order", orderData);

    dispatch({ type: "CLEAR_CART" });

    return response.data;
  } catch (error) {
    console.error("Sipariş oluşturulamadı:", error.response?.data);
    throw error;
  }
};

export const fetchOrders = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/order");
    dispatch({ type: "SET_ORDER_LIST", payload: response.data });
  } catch (error) {
    console.error("Unable to load previous orders:", error.response?.data || error);
  }
};
