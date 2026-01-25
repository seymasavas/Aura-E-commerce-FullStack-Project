import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import shopcard4 from '../../assets/shopcard4.jpg';
import shopcard5 from '../../assets/shopcard5.jpg';
import shopcard6 from '../../assets/shopcard6.jpg';
import shopcard7 from '../../assets/shopcard7.jpg';
import shopcard8 from '../../assets/shopcard8.jpg';

const DesktopShopCard = ({ product }) => {
  return (
    <div className="relative w-[205px] h-[223px] group overflow-hidden cursor-pointer">
       
       <img 
         src={product.image} 
         alt={product.category} 
         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
       />
       
       <div className="absolute inset-0 bg-[#212121] bg-black/20 transition-opacity group-hover:bg-opacity-40"></div>
       
       <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          
          <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] mb-[5px] uppercase font-['Montserrat']">
            {product.category}
          </h5>
          
          <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] font-['Montserrat']">
            {product.count}
          </p>
          
       </div>
    </div>
  );
};

const MobileShopCard = ({ product }) => {
  return (
    <div className="flex flex-col w-full h-[300px] relative overflow-hidden mb-4 shadow-md rounded-md cursor-pointer group">
       <img src={product.image} alt={product.category} className="w-full h-full object-cover absolute inset-0 z-0" />
       <div className="absolute inset-0 bg-black/25 z-10 transition-colors group-hover:bg-black/40"></div>
       <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 text-center">
          <h5 className="font-bold text-[16px] tracking-[0.1px] mb-[5px] uppercase">{product.category}</h5>
          <h6 className="font-bold text-[14px] tracking-[0.2px]">{product.count}</h6>
       </div>
    </div>
  );
};


export default function ShopCards() {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const desktopProducts = [
    { id: 1, category: 'CLOTHS', count: '5 Items', image: shopcard4 },
    { id: 2, category: 'CLOTHS', count: '5 Items', image: shopcard5 },
    { id: 3, category: 'CLOTHS', count: '5 Items', image: shopcard6 },
    { id: 4, category: 'CLOTHS', count: '5 Items', image: shopcard7 },
    { id: 5, category: 'CLOTHS', count: '5 Items', image: shopcard8 },
  ];


  const mobileProducts = [
    { id: 101, category: 'CLOTHS', count: '5 Items', image: shopcard4 },
    { id: 102, category: 'CLOTHS', count: '5 Items', image: shopcard5 },
    { id: 103, category: 'CLOTHS', count: '5 Items', image: shopcard6 },
    { id: 104, category: 'CLOTHS', count: '5 Items', image: shopcard7 },
    { id: 105, category: 'CLOTHS', count: '5 Items', image: shopcard8 },
  ];

  const activeProducts = isMobile ? mobileProducts : desktopProducts;

  return (
    <div className="w-full bg-[#FAFAFA] pb-[48px]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        <div className={`grid w-full justify-center 
            ${isMobile 
              ? 'grid-cols-1 gap-[15px] max-w-[414px]' 
              : 'grid-cols-5 gap-[15px] max-w-[1088px]'
            }`}>
            
          {activeProducts.map((product) => (
            <div key={product.id} className="flex justify-center">
                {isMobile ? (
                  <MobileShopCard product={product} />
                ) : (
                  <DesktopShopCard product={product} />
                )}
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}