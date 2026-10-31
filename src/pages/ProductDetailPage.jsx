import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../store/actions/productActions";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductOverview from "../components/ProductDetail/ProductOverview";
import ProductDescription from "../components/ProductDetail/ProductDescription";
import ProductCrd from "../components/ProductDetail/ProductCrd";

function ProductDetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();

  const { currentProduct, productDetailFetchState } = useSelector(
    (state) => state.product,
  );

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
      window.scrollTo(0, 0);
    }
  }, [dispatch, productId]);

  return (
    <div>
      <Header />

      <div className="bg-[#FAFAFA] py-8">
        <div className="container mx-auto px-4">
          {/* GERİ BUTONU */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 font-bold text-[#252B42] hover:text-[#23A6F0] transition-colors flex items-center gap-2"
          >
            &larr; Back to Shop
          </button>

          {/* YÜKLENİYOR DURUMU */}
          {productDetailFetchState === "FETCHING" && (
            <div className="flex flex-col justify-center items-center py-20 gap-4">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#23A6F0]"></div>
              <span className="text-[#23A6F0] font-bold">
                Ürün Detayları Yükleniyor...
              </span>
            </div>
          )}

          {productDetailFetchState === "FETCHED" && currentProduct && (
            <>
              <ProductOverview product={currentProduct} />
              <ProductDescription product={currentProduct} />
              <ProductCrd />
            </>
          )}

          {/* HATA DURUMU */}
          {productDetailFetchState === "FAILED" && (
            <div className="text-center text-red-500 py-20 font-bold text-xl">
              Ürün detayları yüklenirken bir hata oluştu. Lütfen tekrar deneyin.
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetailPage;
