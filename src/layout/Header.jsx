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
} from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/actions/userActions";

function Header({ isShopPage = false }) {
  const tamReduxverisi = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log("Header Redux Verisi:", tamReduxverisi);

  const { isAuthenticated, user } = tamReduxverisi;

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <header className="w-full bg-white">
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
                  <Link to="/shop" className="hover:text-[#252B42]">
                    Shop
                  </Link>
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
              {/* Desktop Sağ Taraf */}
              <div className="hidden lg:flex items-center gap-[30px] text-[#23A6F0] font-sans font-[700] text-sm">
                {isAuthenticated ? (
                  <div className="flex items-center gap-4">
                    <Link
                      to="/"
                      className="flex items-center gap-[5px] hover:text-blue-600"
                    >
                      <UserIcon className="w-[16px] h-[16px]" /> Hoşgeldin,{" "}
                      {user?.name}
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition-colors"
                    >
                      Log out
                    </button>
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
                <div className="flex items-center gap-1 cursor-pointer">
                  <ShoppingCart className="w-[16px] h-[16px]" />
                  <span className="text-xs">1</span>
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
                    <ShoppingCart className="w-[24px] h-[24px]" />
                  </>
                )}
                <LucideMenu className="w-[24px] cursor-pointer" />
              </div>
            </div>
          </div>

          {/* mobil menü */}
          <div className="lg:hidden flex flex-col items-center justify-center py-8 gap-8">
            <nav className="flex flex-col items-center gap-[30px] font-sans font-[400] text-[30px] text-[#737373]">
              <Link to="/" className="text-[#252B42] font-medium">
                Home
              </Link>
              <Link to="/productlist">Product</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            {/* mobil-shop */}
            {isShopPage && (
              <div className="flex flex-col items-center gap-[20px] text-[#23A6F0] font-sans font-[400] text-[30px]">
                {isAuthenticated ? (
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
                    <ShoppingCart className="w-[30px] h-[30px]" />
                    <span className="text-sm">1</span>
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
