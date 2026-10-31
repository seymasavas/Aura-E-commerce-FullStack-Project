import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCart, Trash, Minus, Plus, Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  updateItemCount,
  toggleItemCheck,
} from "../store/actions/shoppingCartActions";

function CartPage() {
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

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

  const subtotal = cartItems
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.product.price * item.count, 0);

  const hasCheckedItems = cartItems.some((item) => item.checked);
  const deliveryPrice = !hasCheckedItems ? 0 : subtotal > 1500 ? 0 : 30;

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
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto py-12 px-4 min-h-[calc(100vh-200px)]">
          <div className="w-full lg:w-2/3">
            <h1 className="text-2xl font-bold mb-6 border-b pb-4">
              Your Cart Items ({cartItems.length})
            </h1>

            {cartItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between border-b border-gray-200 py-6 transition-opacity ${
                  !item.checked ? "opacity-50 bg-gray-50/50" : ""
                }`}
              >
                {/* Sol Taraf: Checkbox, Görsel ve Ürün Bilgisi */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleToggleCheck(item.product.id)}
                    className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
                      item.checked
                        ? "bg-[#23A6F0] border-[#23A6F0] text-white"
                        : "border-gray-300 text-transparent hover:border-[#23A6F0]"
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
                    <h2 className="text-lg font-semibold text-[#252B42]">
                      {item.product.name || "Product Name"}
                    </h2>
                    <p className="text-[#23A6F0] font-bold mt-1">
                      $
                      {item.product.price
                        ? item.product.price.toFixed(2)
                        : "0.00"}
                    </p>
                  </div>
                </div>

                {/* Sağ Taraf: Miktar (Adet) ve Silme Butonları */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1 border rounded-md p-1">
                    <button
                      className="px-2 py-1 text-gray-500 hover:bg-gray-100 rounded disabled:opacity-50"
                      onClick={() =>
                        handleDecrease(item.product.id, item.count)
                      }
                      disabled={item.count <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-1 font-semibold text-[#252B42]">
                      {item.count}
                    </span>
                    <button
                      className="px-2 py-1 text-gray-500 hover:bg-gray-100 rounded"
                      onClick={() =>
                        handleIncrease(item.product.id, item.count)
                      }
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item.product.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                  >
                    <Trash size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sipariş Özeti (Sağ Taraf) */}
          <div className="w-full lg:w-1/3">
            <div className="border rounded-lg p-6 shadow-sm bg-gray-50 sticky top-10">
              <h2 className="text-xl font-bold mb-6 border-b pb-4 text-[#252B42]">
                Order Overview
              </h2>

              <div className="flex justify-between mb-4 text-[#737373] font-semibold">
                <h3>Subtotal (Selected)</h3>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-6 text-[#737373] font-semibold">
                <h3>Delivery Price</h3>
                <span
                  className={
                    deliveryPrice === 0 ? "text-green-600" : "text-[#252B42]"
                  }
                >
                  {deliveryPrice === 0
                    ? "Free"
                    : `$${deliveryPrice.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between mb-8 border-t pt-6">
                <h3 className="text-xl font-bold text-[#252B42]">Total</h3>
                <span className="text-xl font-bold text-[#23A6F0]">
                  ${(subtotal + deliveryPrice).toFixed(2)}{" "}
                </span>
              </div>

              <button className="w-full bg-[#23A6F0] text-white font-bold py-4 px-4 rounded-md hover:bg-blue-600 transition-colors">
                Proceed to Payment
              </button>
              <p className="text-[11px] text-gray-500 text-center mt-3">
                *Only checked items are included in the total.
              </p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default CartPage;
