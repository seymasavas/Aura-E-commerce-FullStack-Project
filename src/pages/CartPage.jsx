import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCart, Trash, Minus, Plus, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  removeFromCart,
  updateItemCount,
  toggleItemCheck,
} from "../store/actions/shoppingCartActions";

function CartPage() {
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrease = (productId, currentCount) => {
    dispatch(updateItemCount(productId, currentCount + 1));
  };

  const handleDecrease = (productId, currentCount) => {
    if (currentCount > 1) {
      dispatch(updateItemCount(productId, currentCount - 1));
    }
  };

  const handleToggleCheck = (productId) => {
    dispatch(toggleItemCheck(productId));
  };

  const productsSubtotal = cartItems
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.product.price * item.count, 0);

  const hasCheckedItems = cartItems.some((item) => item.checked);
  const baseShipping = !hasCheckedItems
    ? 0
    : productsSubtotal > 1500
      ? 0
      : 29.99;

  const grandTotal = productsSubtotal + baseShipping;

  return (
    <>
      <Header />
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
          <ShoppingCart className="w-[80px] h-[80px] text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Your cart is empty
          </h1>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added anything yet.
          </p>
          <Link
            to="/shop"
            className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-600 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto py-12 px-4 min-h-[calc(100vh-200px)] font-['Montserrat']">
          <div className="w-full lg:w-2/3">
            <h1 className="text-2xl font-bold mb-6 border-b pb-4 text-[#252B42]">
              Sepetim ({cartItems.reduce((acc, item) => acc + item.count, 0)}{" "}
              Ürün)
            </h1>

            {cartItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-4 bg-white shadow-sm transition-opacity ${
                  !item.checked ? "opacity-50 bg-gray-50/50" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleToggleCheck(item.product.id)}
                    className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
                      item.checked
                        ? "bg-[#E77C40] border-[#E77C40] text-white"
                        : "border-gray-300 text-transparent hover:border-[#E77C40]"
                    }`}
                  >
                    <Check size={16} />
                  </button>

                  <div className="w-16 h-20 border rounded overflow-hidden flex-shrink-0 bg-white">
                    <img
                      src={item.product.images?.[0]?.url || item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h2 className="text-sm font-bold text-[#252B42] line-clamp-2 max-w-[250px]">
                      {item.product.name || "Product Name"}
                    </h2>
                    <span className="text-xs text-gray-500 mt-1">
                      Beden: Standart
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1 border rounded-md p-1">
                    <button
                      className="px-2 py-1 text-gray-500 hover:bg-gray-100 rounded disabled:opacity-50"
                      onClick={() =>
                        handleDecrease(item.product.id, item.count)
                      }
                      disabled={item.count <= 1}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 py-1 font-semibold text-[#252B42] text-sm">
                      {item.count}
                    </span>
                    <button
                      className="px-2 py-1 text-gray-500 hover:bg-gray-100 rounded"
                      onClick={() =>
                        handleIncrease(item.product.id, item.count)
                      }
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <span className="font-bold text-[#23A6F0] text-base min-w-[80px] text-right">
                    ${(item.product.price * item.count).toFixed(2)}
                  </span>

                  <button
                    onClick={() => handleRemoveItem(item.product.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-2"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/3">
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white sticky top-10">
              {/* 3. Üst Sepeti Onayla Butonu */}
              <button
                onClick={() => navigate("/order")}
                className="w-full bg-[#23A6F0] text-white font-bold py-3 px-4 rounded-md hover:bg-blue-600 transition-colors mb-6 text-sm"
              >
                Sepeti Onayla &gt;
              </button>

              <h2 className="text-lg font-bold mb-4 text-[#252B42]">
                Sipariş Özeti
              </h2>

              <div className="flex justify-between mb-3 text-sm text-[#737373]">
                <span>Ürünün Toplamı</span>
                <span className="font-semibold text-[#252B42]">
                  ${productsSubtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between mb-3 text-sm text-[#737373]">
                <span>Kargo Toplam</span>
                <span className="font-semibold text-[#252B42]">
                  ${baseShipping.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between mb-6 border-t pt-4 text-base font-bold text-[#252B42]">
                <span>Toplam</span>
                <span className="text-[#23A6F0] text-xl">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="+ İNDİRİM KODU GİR"
                  className="w-full border border-gray-300 rounded p-2 text-xs text-center uppercase tracking-wider text-gray-500 focus:outline-none focus:border-[#E77C40]"
                />
              </div>

              {/* 4. Alt Sepeti Onayla Butonu */}
              <button
                onClick={() => navigate("/order")}
                className="w-full bg-[#23A6F0] text-white font-bold py-3 px-4 rounded-md hover:bg-blue-600 transition-colors text-sm"
              >
                Sepeti Onayla &gt;
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default CartPage;
