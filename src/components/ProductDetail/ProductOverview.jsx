import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Star, ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye } from "lucide-react";

import productcard1 from '../../assets/productcard1.jpg'; 
import productcard2 from '../../assets/productcard2.jpg'; 
import productcard3 from '../../assets/productcard3.jpg'; 
import productcard4 from '../../assets/productcard4.jpg'; 
import productcard5 from '../../assets/productcard5.jpg'; 
import productcard6 from '../../assets/productcard6.jpg';  
import productcard7 from '../../assets/productcard7.jpg'; 
import productcard8 from '../../assets/productcard8.jpg';       
import productcard9 from '../../assets/productcard9.jpg'; 
import productcard10 from '../../assets/productcard10.jpg'; 
import productcard11 from '../../assets/productcard11.jpg'; 
import productcard12 from '../../assets/productcard12.jpg';



export default function ProductOverview() {
  
  const { productId } = useParams();
  
  const imageLookup = {
      "1": productcard1,
      "2": productcard2,
      "3": productcard3,
      "4": productcard4,
      "5": productcard5,
      "6": productcard6,
      "7": productcard7,
      "8": productcard8,
      "9": productcard9,
      "10": productcard10,
      "11": productcard11,
      "12": productcard12
  };


  const selectedImage = imageLookup[productId] ;

  const productImages = [
      { id: 1, url: selectedImage },
      { id: 2, url: selectedImage }, 
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [productId]);


  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  return (
    <div className="w-full bg-[#FAFAFA] pb-12">
      <div className="container mx-auto px-4">
        
        <div className="py-6 flex gap-2 text-sm font-bold text-[#252B42]">
             <span className="text-[#252B42]">Home</span> 
             <span className="text-[#BDBDBD]">{">"}</span>
             <span className="text-[#BDBDBD]">Shop</span>
             <span className="text-[#BDBDBD]">{">"}</span>
             <span className="text-[#BDBDBD]">Product {productId}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-[30px] justify-center max-w-[1050px] mx-auto">
            
            <div className="w-full lg:w-[510px]">
                
                <div className="relative w-full h-[277px] lg:h-[450px] rounded-[5px] overflow-hidden mb-[20px]">
                    <img 
                        src={productImages[activeImageIndex].url} 
                        alt="Product" 
                        className="w-full h-full object-cover object-top" 
                    />
                    
                    <button onClick={handlePrev} className="absolute left-[20px] top-1/2 -translate-y-1/2 text-white">
                        <ChevronLeft size={60} strokeWidth={2} />
                    </button>
                    <button onClick={handleNext} className="absolute right-[20px] top-1/2 -translate-y-1/2 text-white">
                        <ChevronRight size={60} strokeWidth={2} />
                    </button>
                </div>

                <div className="flex gap-[15px] overflow-x-auto pb-2">
                    {productImages.map((img, index) => (
                        <div 
                            key={img.id} 
                            onClick={() => setActiveImageIndex(index)}
                            className={`flex-shrink-0 w-[100px] h-[75px] cursor-pointer overflow-hidden rounded-[5px] ${activeImageIndex === index ? 'opacity-100 ring-2 ring-gray-400' : 'opacity-50'}`}
                        >
                            <img src={img.url} alt="thumbnail" className="w-full h-full object-cover object-top" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-[510px] pt-[10px] px-[24px] lg:px-0 pb-[30px]">
                <h4 className="font-['Montserrat'] font-[400] text-[20px] leading-[30px] text-[#252B42] mb-[10px]">
                    Floating Phone (Product {productId})
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
                    $1,139.33
                </h3>

                <div className="flex items-center gap-[5px] mb-[32px]">
                    <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">
                        Availability :
                    </span>
                    <span className="font-['Montserrat'] font-[700] text-[14px] text-[#23A6F0]">
                        In Stock 
                    </span>
                </div>

                <p className="font-['Montserrat'] font-[400] text-[14px] leading-[20px] text-[#858585] mb-[26px]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>

                <hr className="border-[#BDBDBD] mb-[29px]" />

                <div className="flex gap-[10px] mb-[60px]">
                    <span className="w-[30px] h-[30px] rounded-full bg-[#23A6F0] cursor-pointer hover:scale-110 transition-transform shadow-sm"></span>
                    <span className="w-[30px] h-[30px] rounded-full bg-[#2DC071] cursor-pointer hover:scale-110 transition-transform shadow-sm"></span>
                    <span className="w-[30px] h-[30px] rounded-full bg-[#E77C40] cursor-pointer hover:scale-110 transition-transform shadow-sm"></span>
                    <span className="w-[30px] h-[30px] rounded-full bg-[#252B42] cursor-pointer hover:scale-110 transition-transform shadow-sm"></span>
                </div>

                <div className="flex items-center gap-[10px]">
                    <button className="bg-[#23A6F0] text-white font-['Montserrat'] font-[700] text-[14px] px-[20px] py-[10px] rounded-[5px] hover:bg-blue-600 transition-colors h-[44px]">
                        Select Options
                    </button>
                    <button className="w-[40px] h-[40px] flex items-center justify-center bg-white border border-[#E8E8E8] rounded-full hover:bg-gray-100 transition-colors group">
                        <Heart size={20} className="text-[#252B42] group-hover:text-red-500 transition-colors" />
                    </button>
                    <button className="w-[40px] h-[40px] flex items-center justify-center bg-white border border-[#E8E8E8] rounded-full hover:bg-gray-100 transition-colors group">
                        <ShoppingCart size={20} className="text-[#252B42] group-hover:text-[#23A6F0] transition-colors" />
                    </button>
                    <button className="w-[40px] h-[40px] flex items-center justify-center bg-white border border-[#E8E8E8] rounded-full hover:bg-gray-100 transition-colors group">
                        <Eye size={20} className="text-[#252B42] group-hover:text-[#23A6F0] transition-colors" />
                    </button>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
}