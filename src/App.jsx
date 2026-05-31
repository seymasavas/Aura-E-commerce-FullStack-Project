import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomePage from "/src/pages/HomePage.jsx";
import Pricing from "/src/pages/Pricing.jsx";
import About from "/src/pages/About.jsx";
import CartPage from "/src/pages/CartPage.jsx";
import Contact from "/src/pages/Contact.jsx";
import ProductDetailPage from "/src/pages/ProductDetailPage.jsx";
import ProductListPage from "/src/pages/ProductListPage.jsx";
import ShopPage from "/src/pages/ShopPage.jsx";
import Team from "/src/pages/Team.jsx";
import { Route, Routes } from "react-router-dom";
import SignUp from "/src/pages/SignUp.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "/src/pages/Login.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const fakeData = {
        token: token,
        user: { name: "Şeyma", email: "test@test.com", role_id: 3 },
      };
      dispatch({ type: "LOGIN_SUCCESS", payload: fakeData });
    }
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <div>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/shop/:productId/:productNameSlug"
            element={<ProductDetailPage />}
          />
          <Route path="/productlist" element={<ProductListPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
