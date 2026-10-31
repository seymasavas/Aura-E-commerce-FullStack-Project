import { useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Eye,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/shoppingCartActions";

export default function ProductOverview({ product: currentProduct }) {
  const dispatch = useDispatch();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!currentProduct) return null;

  const productImages = currentProduct.images || [
    { url: currentProduct.image },
  ];

  const handleNext = () => {
    setActiveImageIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1,
    );
  };

  return (
    <div className="w-full bg-[#FAFAFA] pb-12">
      <div className="container mx-auto px-4">
        <div className="py-6 flex gap-2 text-sm font-bold text-[#252B42]">
          <span className="text-[#252B42]">Home</span>
          <span className="text-[#BDBDBD]">{">"}</span>
          <span className="text-[#BDBDBD]">Shop</span>
          <span className="text-[#BDBDBD]">{">"}</span>
          <span className="text-[#BDBDBD]">Product {currentProduct.id}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-[30px] justify-center max-w-[1050px] mx-auto">
          <div className="w-full lg:w-[510px]">
            <div className="relative w-full h-[277px] lg:h-[450px] rounded-[5px] overflow-hidden mb-[20px]">
              <img
                src={productImages[activeImageIndex].url}
                alt="Product"
                className="w-full h-full object-cover object-top"
              />

              <button
                onClick={handlePrev}
                className="absolute left-[20px] top-1/2 -translate-y-1/2 text-white"
              >
                <ChevronLeft size={60} strokeWidth={2} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-[20px] top-1/2 -translate-y-1/2 text-white"
              >
                <ChevronRight size={60} strokeWidth={2} />
              </button>
            </div>

            <div className="flex gap-[15px] overflow-x-auto pb-2">
              {productImages.map((img, index) => (
                <div
                  key={img.index || index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`flex-shrink-0 w-[100px] h-[75px] cursor-pointer overflow-hidden rounded-[5px] ${activeImageIndex === index ? "opacity-100 ring-2 ring-gray-400" : "opacity-50"}`}
                >
                  <img
                    src={img.url}
                    alt="thumbnail"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[510px] pt-[10px] px-[24px] lg:px-0 pb-[30px]">
            <h4 className="font-['Montserrat'] font-[400] text-[20px] leading-[30px] text-[#252B42] mb-[10px]">
              {currentProduct.name}
            </h4>
            <div className="flex items-center gap-[10px] mb-[20px]">
              <div className="flex gap-[5px]">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} size={22} fill="#F3CD03" stroke="none" />
                ))}
                <Star size={22} fill="none" stroke="#F3CD03" />
              </div>
              <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">
                10 Reviews
              </span>
            </div>
            <h3 className="font-['Montserrat'] font-[700] text-[24px] leading-[32px] text-[#252B42] mb-[5px]">
              ${currentProduct.price}
            </h3>
            <div className="flex items-center gap-[5px] mb-[32px]">
              <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">
                Availability :
              </span>
              <span className="font-['Montserrat'] font-[700] text-[14px] text-[#23A6F0]">
                {currentProduct.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <p className="font-['Montserrat'] font-[400] text-[14px] leading-[20px] text-[#858585] mb-[26px]">
              {currentProduct.description}
            </p>
            <hr className="border-[#BDBDBD] mb-[29px]" />
            <div className="flex gap-[10px] mb-[60px]">
              <span className="w-[30px] h-[30px] rounded-full bg-[#23A6F0] cursor-pointer hover:scale-110 transition-transform shadow-sm"></span>
              <span className="w-[30px] h-[30px] rounded-full bg-[#2DC071] cursor-pointer hover:scale-110 transition-transform shadow-sm"></span>
              <span className="w-[30px] h-[30px] rounded-full bg-[#E77C40] cursor-pointer hover:scale-110 transition-transform shadow-sm"></span>
              <span className="w-[30px] h-[30px] rounded-full bg-[#252B42] cursor-pointer hover:scale-110 transition-transform shadow-sm"></span>
            </div>

            <button
              onClick={() => dispatch(addToCart(currentProduct))}
              className="w-full mt-3 py-2 bg-[#23A6F0] text-white font-bold rounded hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
