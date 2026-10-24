import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductCrd() {
  const { productList: products = [], fetchState } = useSelector(
    (state) => state.product,
  );

  console.log("The products came from redux store", products);

  return (
    <div className="w-full bg-white font-sans">
      <div className="container mx-auto px-4 lg:px-0 lg:max-w-[1124px] py-20 flex flex-col items-center gap-6 lg:gap-6">
        <div className="flex flex-col items-start gap-[10px] w-full max-w-[1048px] mx-auto mb-6">
          <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <hr className="w-full border-t-2 border-[#ECECEC] mb-2" />
        </div>

        {/* 1. DURUM: YÜKLENİYOR (SPINNER) */}
        {fetchState === "FETCHING" && (
          <div className="flex flex-col justify-center items-center py-20 gap-4 w-full">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#23A6F0]"></div>
            <span className="text-[#23A6F0] font-bold">
              Ürünler Yükleniyor...
            </span>
          </div>
        )}

        {/* 2. DURUM: BAŞARISIZ */}
        {fetchState === "FAILED" && (
          <div className="text-red-500 font-bold py-10 text-center w-full">
            Ürünler yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.
          </div>
        )}

        {/* 3. DURUM: BAŞARILI VE VERİ VAR */}
        {fetchState === "FETCHED" && (
          <>
            <div className="flex flex-wrap justify-center gap-[30px] w-full">
              {products?.map((product, index) => (
                <div
                  key={product.id}
                  className={`flex-col items-center w-full max-w-[295px] lg:max-w-[183px] ${
                    index > 4 ? "hidden lg:flex" : "flex"
                  }`}
                >
                  <Link
                    to={`/shop/${product.category_id}/${product.id}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="w-full h-[360px] lg:h-[238px] mb-[25px] block overflow-hidden rounded-md"
                  >
                    <img
                      src={product.images?.[0]?.url}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  <div className="flex flex-col items-center gap-[10px] pb-[35px]">
                    <h5 className="font-bold text-base leading-6 tracking-[0.1px] text-[#252B42] text-center line-clamp-1">
                      {product.name}
                    </h5>

                    <span className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373] text-center line-clamp-1 px-2">
                      {product.description}
                    </span>

                    <div className="flex gap-[5px] px-[3px] py-[5px]">
                      <span className="font-bold text-base leading-6 tracking-[0.1px] text-[#BDBDBD] line-through">
                        {(product.price * 1.2).toFixed(2)} ₺
                      </span>
                      <span className="font-bold text-base leading-6 tracking-[0.1px] text-[#23856D]">
                        {product.price} ₺
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 lg:mt-4 py-[15px] px-10 bg-white border border-[#23A6F0] rounded-[5px] text-[#23A6F0] font-bold text-sm leading-[22px] tracking-[0.2px] hover:bg-[#23A6F0] hover:text-white transition-all uppercase">
              LOAD MORE PRODUCTS
            </button>
          </>
        )}
      </div>
    </div>
  );
}
