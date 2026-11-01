import {
  Heart,
  Instagram,
  LucideFacebook,
  LucideMenu,
  LucideYoutube,
  MailIcon,
  PhoneIcon,
  Search,
  ShoppingCart,
  Twitter,
  UserIcon,
  Package,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/actions/clientActions";
import md5 from "md5";
import { useState } from "react";

function Header({ isShopPage = false }) {
  const user = useSelector((state) => state.client.user);
  const isUserLoggedIn = user && user.email;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const gravatarHash = isUserLoggedIn
    ? md5(user.email.trim().toLowerCase())
    : "";
  const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}?s=30&d=mp`;

  const categories = useSelector((state) => state.product.categories || []);

  const maleCategories = categories.filter(
    (category) => category.gender === "e",
  );
  const femaleCategories = categories.filter(
    (category) => category.gender === "k",
  );

  const cart = useSelector((state) => state.shoppingCart.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItemCount = cart.reduce((total, item) => total + item.count, 0);

  return (
    <header className="w-full bg-white font-['Montserrat']">
      <div className="hidden lg:flex h-[58px] bg-[#252B42] font-sans items-center justify-between px-[30px]">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-[20px]">
            <div className="flex items-center gap-[5px]">
              <PhoneIcon className="w-[16px] h-[16px] text-white" />
              <h6 className="font-[700] text-sm text-white">(225) 555-0118</h6>
            </div>
            <div className="flex items-center gap-[5px]">
              <MailIcon className="w-[16px] h-[16px] text-white" />
              <h6 className="font-[700] text-sm text-white">
                michelle.rivera@example.com
              </h6>
            </div>
          </div>

          <div>
            <h6 className="font-[700] text-sm text-white">
              Follow Us and get a chance to win 80% off
            </h6>
          </div>

          <div className="flex items-center gap-[10px]">
            <h6 className="font-[700] text-sm text-white">Follow Us :</h6>
            <div className="flex items-center gap-[10px]">
              <Instagram className="w-[16px] h-[16px] text-white" />
              <LucideYoutube className="w-[16px] h-[16px] text-white" />
              <LucideFacebook className="w-[16px] h-[16px] text-white" />
              <Twitter className="w-[16px] h-[16px] text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white shadow-sm">
        <div className="flex flex-col w-full">
          <div className="w-full px-[20px] lg:px-[35px] h-[80px] flex items-center justify-between">
            <div className="flex items-center gap-[80px]">
              <Link
                to="/"
                className="font-sans font-[700] text-3xl tracking-[0.1px] text-[#252B42]"
              >
                Aura
              </Link>

              <div className="hidden lg:flex items-center">
                <nav className="flex gap-[20px] font-sans font-[700] text-sm text-[#737373]">
                  <Link to="/" className="hover:text-[#252B42]">
                    Home
                  </Link>

                  <div className="group relative flex items-center gap-1 cursor-pointer">
                    <Link
                      to="/shop"
                      className="hover:text-[#252B42] transition-colors"
                    >
                      Shop
                    </Link>
                    <ChevronDown
                      size={14}
                      className="text-[#737373] group-hover:text-[#252B42] transition-colors"
                    />

                    <div className="absolute top-[120%] left-0 bg-white shadow-lg rounded-md p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 z-50 border border-gray-100 flex flex-row gap-12 min-w-[300px]">
                      <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-[#252B42] mb-2 text-base">
                          Kadın
                        </h3>
                        {femaleCategories?.map((category) => (
                          <Link
                            key={category.id}
                            to={`/shop/kadin/${category.title.toLowerCase().replace(/\s+/g, "-")}/${category.id}`}
                            className="text-[14px] font-medium text-[#737373] hover:text-[#23A6F0]"
                          >
                            {category.title}
                          </Link>
                        ))}
                      </div>

                      <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-[#252B42] mb-2 text-base">
                          Erkek
                        </h3>
                        {maleCategories?.map((category) => (
                          <Link
                            key={category.id}
                            to={`/shop/erkek/${category.title.toLowerCase().replace(/\s+/g, "-")}/${category.id}`}
                            className="text-[14px] font-medium text-[#737373] hover:text-[#23A6F0]"
                          >
                            {category.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link to="/about" className="hover:text-[#252B42]">
                    About
                  </Link>
                  <Link to="/blog" className="hover:text-[#252B42]">
                    Blog
                  </Link>
                  <Link to="/contact" className="hover:text-[#252B42]">
                    Contact
                  </Link>
                  <div className="group relative flex items-center gap-1 cursor-pointer ">
                    <span className="font-bold text-[14px] leading-[24px] text-[#737373] group-hover:text-[#252B42] transition-colors">
                      Pages
                    </span>
                    <ChevronDown
                      size={14}
                      className="text-[#737373] group-hover:text-[#252B42] transition-colors"
                    />

                    <div className="absolute top-full left-0 w-[150px] bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                      <Link
                        to="/team"
                        className="block px-4 py-2 text-[14px] font-bold text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0]"
                      >
                        Team
                      </Link>

                      <Link
                        to="/pricing"
                        className="block px-4 py-2 text-[14px] font-bold text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0]"
                      >
                        Pricing
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            <div className="flex items-center">
              <div className="hidden lg:flex items-center gap-[30px] text-[#23A6F0] font-sans font-[700] text-sm">
                {isUserLoggedIn ? (
                  <div className="relative">
                    <button
                      onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                      className="flex items-center gap-2 hover:text-blue-600 focus:outline-none"
                    >
                      <img
                        src={gravatarUrl}
                        alt="Profil"
                        className="w-[30px] h-[30px] rounded-full border border-gray-300"
                      />
                      <span>Hoşgeldin, {user?.name}</span>
                      <ChevronDown size={14} />
                    </button>

                    {/* Kullanıcı Dropdown Menüsü */}
                    {userDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                        <Link
                          to="/previous-orders"
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium"
                        >
                          <Package size={16} className="text-[#E77C40]" />{" "}
                          Geçmiş Siparişlerim
                        </Link>
                        <button
                          onClick={() => {
                            setUserDropdownOpen(false);
                            handleLogout();
                          }}
                          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left font-medium"
                        >
                          <LogOut size={16} /> Çıkış Yap
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center gap-[5px] hover:text-blue-600"
                  >
                    <UserIcon className="w-[16px] h-[16px]" />
                    Login / Register
                  </Link>
                )}

                <Search className="w-[16px] h-[16px] cursor-pointer" />

                <div
                  className="relative flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => setIsCartOpen(true)}
                  onMouseLeave={() => setIsCartOpen(false)}
                >
                  <ShoppingCart className="w-[16px] h-[16px]" />
                  <span className="text-xs">{totalItemCount}</span>

                  {isCartOpen && (
                    <div className="absolute top-[100%] right-0 w-[320px] bg-white border border-[#E8E8E8] shadow-lg rounded-b-md z-50 p-4 font-['Montserrat'] cursor-default">
                      <h4 className="font-bold text-[#252B42] text-[14px] mb-4 pb-2 border-b border-[#ECECEC]">
                        Sepetim ({totalItemCount} Ürün)
                      </h4>

                      {cart.length === 0 ? (
                        <p className="text-center text-[#737373] text-[14px] py-4">
                          Sepetiniz şu an boş.
                        </p>
                      ) : (
                        <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto">
                          {cart.map((item, index) => (
                            <div
                              key={index}
                              className="flex gap-4 items-center border-b border-[#ECECEC] pb-4 last:border-b-0 last:pb-0"
                            >
                              <div className="w-[60px] h-[80px] border border-[#E8E8E8] rounded overflow-hidden flex-shrink-0">
                                <img
                                  src={
                                    item.product.images?.[0]?.url ||
                                    item.product.image
                                  }
                                  alt={item.product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex flex-col flex-grow">
                                <h5 className="font-bold text-[#252B42] text-[12px] line-clamp-2 leading-snug mb-1">
                                  {item.product.name}
                                </h5>
                                <p className="text-[#737373] text-[11px] mb-2">
                                  Adet: {item.count}
                                </p>
                                <span className="font-bold text-[#E77C40] text-[14px]">
                                  $
                                  {(item.product.price * item.count).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex gap-2 mt-4 pt-4 border-t border-[#ECECEC]">
                        <Link
                          to="/cart"
                          onClick={() => setIsCartOpen(false)}
                          className="flex-1 py-2 text-center bg-white text-[#252B42] border border-[#E8E8E8] font-bold text-[12px] rounded hover:bg-gray-50 transition-colors"
                        >
                          Sepete Git
                        </Link>
                        <button
                          onClick={() => {
                            setIsCartOpen(false);
                            navigate("/order");
                          }}
                          className="flex-1 py-2 bg-[#E77C40] text-white font-bold text-[12px] rounded hover:bg-[#d46d36] transition-colors"
                        >
                          Siparişi Tamamla
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1 cursor-pointer">
                  <Heart className="w-[16px] h-[16px]" />
                  <span className="text-xs">1</span>
                </div>
              </div>

              <div className="flex items-center gap-[20px] lg:hidden text-[#737373]">
                {!isShopPage && (
                  <>
                    <Search className="w-[24px] h-[24px]" />
                    <Link
                      to="/cart"
                      className="flex items-center gap-1 cursor-pointer"
                    >
                      <ShoppingCart className="w-[24px] h-[24px]" />
                      <span className="text-xs">{totalItemCount}</span>
                    </Link>
                  </>
                )}
                <LucideMenu className="w-[24px] cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="lg:hidden flex flex-col items-center justify-center py-8 gap-8">
            <nav className="flex flex-col items-center gap-[30px] font-sans font-[400] text-[30px] text-[#737373]">
              <Link to="/" className="text-[#252B42] font-medium">
                Home
              </Link>
              <Link to="/contact">Contact</Link>
            </nav>

            {isShopPage && (
              <div className="flex flex-col items-center gap-[20px] text-[#23A6F0] font-sans font-[400] text-[30px]">
                {isUserLoggedIn ? (
                  <Link to="/" className="flex items-center gap-[10px]">
                    <UserIcon className="w-[30px] h-[30px]" />
                    <span>hoşgeldin, {user?.name}</span>
                  </Link>
                ) : (
                  <Link to="/login" className="flex items-center gap-[10px]">
                    <UserIcon className="w-[30px] h-[30px]" />
                    <span>Login / Register</span>
                  </Link>
                )}

                <div className="flex flex-col gap-[20px] items-center">
                  <Search className="w-[30px] h-[30px]" />
                  <div className="flex items-center gap-[5px]">
                    <Link
                      to="/cart"
                      className="flex items-center gap-1 cursor-pointer"
                    >
                      <ShoppingCart size={24} />
                      <span className="text-lg">{totalItemCount}</span>
                    </Link>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <Heart className="w-[30px] h-[30px]" />
                    <span className="text-sm">1</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
