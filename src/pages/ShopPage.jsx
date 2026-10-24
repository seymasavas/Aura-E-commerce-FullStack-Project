import Clients from "../components/Clients";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ShopCard from "../components/Shop/ShopCard";
import ShopFilter from "../components/Shop/ShopFilter";
import ProductCard from "../components/Shop/ProductCard";
import { fetchProducts } from "../store/actions/productActions.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ShopPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { fetchState, productList } = useSelector((state) => state.product);

  return (
    <div>
      <Header isShopPage={true} />

      <div className="w-full bg-[#FAFAFA] py-[24px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-[30px] lg:flex-row lg:justify-between lg:items-center">
            <h2 className="font-sans font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
              Shop
            </h2>

            <div className="flex items-center gap-[15px] py-[10px]">
              <Link
                to="/"
                className="font-sans font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]"
              >
                Home
              </Link>
              <ChevronRight className="w-[9px] h-[16px] text-[#BDBDBD]" />
              <span className="font-sans font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#BDBDBD]">
                Shop
              </span>
            </div>
          </div>
        </div>
      </div>

      <ShopCard />
      <ShopFilter />
      {fetchState === "FETCHING" && (
        <div className="flex flex-col justify-center items-center py-20 gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#23A6F0]"></div>
          <span className="text-[#23A6F0] font-bold">
            Ürünler Yükleniyor...
          </span>
        </div>
      )}

      {/* BAŞARILI DURUM - ÜRÜN LİSTESİ */}
      {fetchState === "FETCHED" && (
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-wrap justify-center gap-[30px] w-full">
            {productList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* HATA DURUMU (Opsiyonel) */}
      {fetchState === "FAILED" && (
        <div className="text-center text-red-500 py-10 font-bold">
          Ürünler yüklenirken bir hata oluştu.
        </div>
      )}
      <Clients />
      <Footer />
    </div>
  );
}

export default ShopPage;
