import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCart, Trash, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { setCart } from "../store/actions/shoppingCartActions";

function CartPage() {
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (productId) => {
    const updatedCart = cartItems.filter(
      (item) => item.product.id !== productId,
    );

    dispatch(setCart(updatedCart));
  };

  const handleIncrease = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.product.id === productId ? { ...item, count: item.count + 1 } : item,
    );
    dispatch(setCart(updatedCart));
  };

  const handleDecrease = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.product.id === productId && item.count > 1
        ? { ...item, count: item.count - 1 }
        : item,
    );
    dispatch(setCart(updatedCart));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.count,
    0,
  );

  const deliveryPrice = cartItems.length === 0 ? 0 : subtotal > 1500 ? 0 : 30; // Set delivery price to $30 if there are items in the cart
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
                className="flex items-center justify-between border-b border-gray-200 py-6"
              >
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

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1 border rounded-md p-1">
                    <button
                      className="px-2 py-1 text-gray-500 hover:bg-gray-100 rounded"
                      onClick={() => handleDecrease(item.product.id)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-1 font-semibold text-[#252B42]">
                      {item.count}
                    </span>
                    <button
                      className="px-2 py-1 text-gray-500 hover:bg-gray-100 rounded"
                      onClick={() => handleIncrease(item.product.id)}
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

          <div className="w-full lg:w-1/3">
            <div className="border rounded-lg p-6 shadow-sm bg-gray-50 sticky top-10">
              <h2 className="text-xl font-bold mb-6 border-b pb-4 text-[#252B42]">
                Order Overview
              </h2>

              <div className="flex justify-between mb-4 text-[#737373] font-semibold">
                <h3>Subtotal</h3>
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
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default CartPage;
