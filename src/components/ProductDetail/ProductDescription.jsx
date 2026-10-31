import { ChevronRight } from "lucide-react";

export default function ProductDescription({ product: currentProduct }) {
  if (!currentProduct) {
    return null;
  }

  const selectedImage = currentProduct.images?.[0]?.url || currentProduct.image;

  return (
    <div className="w-full bg-white pb-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-[30px] lg:gap-[60px] py-[30px] border-b border-[#ECECEC] mb-[30px]">
          <button className="font-['Montserrat'] font-[600] text-[14px] leading-[24px] text-[#737373] hover:text-[#252B42] relative">
            Description
          </button>

          <button className="font-['Montserrat'] font-[700] text-[14px] leading-[24px] text-[#737373] hover:text-[#252B42]">
            Additional Information
          </button>

          <button className="font-['Montserrat'] font-[700] text-[14px] leading-[24px] text-[#737373] hover:text-[#252B42]">
            Reviews
            <span className="ml-[5px] text-[#23856D]">(0)</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-[30px] justify-center max-w-[1056px] mx-auto">
          <div className="w-full lg:w-[332px]">
            <div className="relative w-full h-[392px] lg:w-[316px] lg:h-[372px] mx-auto lg:mx-0 mt-4 lg:mt-0">
              <div className="absolute top-[15px] left-[15px] w-full h-full bg-[#C4C4C4]/30 rounded-[5px]"></div>
              <img
                src={selectedImage}
                alt="Description"
                className="relative z-10 w-full h-full object-cover rounded-[5px]"
              />
            </div>
          </div>

          <div className="w-full lg:w-[332px] flex flex-col gap-[30px]">
            <h3 className="font-['Montserrat'] font-[700] text-[24px] text-[#252B42]">
              {currentProduct.name}
            </h3>

            <div className="font-['Montserrat'] font-[400] text-[14px] leading-[20px] text-[#737373] flex flex-col gap-[20px]">
              <p>{currentProduct.description}</p>
              <p>{currentProduct.description}</p>
              <p>{currentProduct.description}</p>
            </div>
          </div>

          <div className="w-full lg:w-[332px] flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px]">
              <h3 className="font-['Montserrat'] font-[700] text-[24px] text-[#252B42]">
                {currentProduct.name}
              </h3>

              <div className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[20px]">
                  <ChevronRight size={16} className="text-[#737373]" />
                  <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <ChevronRight size={16} className="text-[#737373]" />
                  <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <ChevronRight size={16} className="text-[#737373]" />
                  <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <ChevronRight size={16} className="text-[#737373]" />
                  <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[30px]">
              <h3 className="font-['Montserrat'] font-[700] text-[24px] text-[#252B42]">
                {currentProduct.name}
              </h3>

              <div className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[20px]">
                  <ChevronRight size={16} className="text-[#737373]" />
                  <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <ChevronRight size={16} className="text-[#737373]" />
                  <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <ChevronRight size={16} className="text-[#737373]" />
                  <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
