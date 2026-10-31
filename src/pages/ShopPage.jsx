import Clients from "../components/Clients";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ShopCard from "../components/Shop/ShopCard";
import ShopFilter from "../components/Shop/ShopFilter";
import ProductCard from "../components/Shop/ProductCard";
import { fetchProducts, setOffset } from "../store/actions/productActions.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ShopPage() {
  const dispatch = useDispatch();
  const { fetchState, productList, filter, sort, limit, offset, total } =
    useSelector((state) => state.product);

  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchProducts(categoryId, filter, sort, limit, offset));
  }, [dispatch, categoryId, filter, sort, limit, offset]);

  // Sayfalama Matematiği
  const totalPages = Math.ceil(total / limit) || 1;
  const currentPage = offset / limit + 1;

  // YENİ: Sadece 5 sayfa numarası gösterecek "Pencere" algoritması
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);

  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }
  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  const handlePageChange = (pageNumber) => {
    const newOffset = (pageNumber - 1) * limit;
    dispatch(setOffset(newOffset));
    window.scrollTo(0, 0);
  };

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

      {/* DİNAMİK SAYFALAMA */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 mb-8 w-full px-4">
          {/* overflow-x-auto ekleyerek mobilde taşmaları engelledik */}
          <div className="shadow-md rounded-[6px] border border-[#BDBDBD] bg-white overflow-hidden flex font-bold font-['Montserrat'] max-w-full overflow-x-auto">
            {/* First (İlk Sayfa) Butonu */}
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(1)}
              className="h-[74px] px-[15px] sm:px-[25px] bg-[#F3F3F3] text-[#BDBDBD] text-[12px] sm:text-[14px] border-r border-[#BDBDBD] hover:bg-gray-200 transition-colors disabled:cursor-not-allowed"
            >
              First
            </button>

            {/* Prev (Önceki Sayfa) Butonu EKLENDİ */}
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="h-[74px] px-[15px] sm:px-[25px] bg-white text-[#23A6F0] text-[12px] sm:text-[14px] border-r border-[#E8E8E8] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Prev
            </button>

            {/* Sadece hesaplanan 5 sayfayı basar */}
            {visiblePages.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`h-[74px] px-[15px] sm:px-[20px] text-[12px] sm:text-[14px] border-r border-[#E8E8E8] transition-colors ${
                  currentPage === page
                    ? "bg-[#23A6F0] text-white"
                    : "bg-white text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next (Sonraki) Butonu */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="h-[74px] px-[15px] sm:px-[25px] bg-white text-[#23A6F0] text-[12px] sm:text-[14px] border-r border-[#E8E8E8] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>

            {/* Last (Son Sayfa) Butonu EKLENDİ */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(totalPages)}
              className="h-[74px] px-[15px] sm:px-[25px] bg-white text-[#23A6F0] text-[12px] sm:text-[14px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Last
            </button>
          </div>
        </div>
      )}

      {/* HATA DURUMU */}
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
