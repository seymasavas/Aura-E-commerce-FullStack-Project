import axiosInstance from "../../api/axiosInstance";

export const loginUser = (formData) => async (dispatch) => {
  dispatch({ type: "LOGIN_START", isLoading: true });

  try {
    // --- 🚨 GEÇİCİ MOCK (TAKLİT) İŞLEMİ 🚨 ---
    // Backend mail atamadığı için gerçek isteği durdurup kendi token'ımızı üretiyoruz.

    // Ağ isteği efekti vermek için 1 saniye bekletiyoruz
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const fakeData = {
      token: "mock_gizli_token_987654321",
      user: {
        name: " Şeyma",
        email: formData.email,
        role_id: 3,
      },
    };

    localStorage.setItem("token", fakeData.token);
    dispatch({ type: "LOGIN_SUCCESS", payload: fakeData });
    console.log("✅ Mock Giriş Başarılı! Sahte token kaydedildi.");

    /* --- GERÇEK KOD (Backend düzelene kadar yoruma aldık) ---
    const response = await axiosInstance.post("/login", formData);
    localStorage.setItem("token", response.data.token);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    */
  } catch (error) {
    console.error("🚨 BACKEND İTİRAFI:", error.response?.data);
    dispatch({ type: "LOGIN_FAILURE", payload: error.message });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });

  console.log("✅ Çıkış yapıldı, token silindi.");
};
