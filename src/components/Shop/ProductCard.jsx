import { Link } from "react-router-dom";
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


export default function ProductCard() {
  
  const products = [
    { id: 1, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard1 },
    { id: 2, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard2 },
    { id: 3, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard3 },
    { id: 4, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard4 },
    { id: 5, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard5 },
    { id: 6, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard6 },
    { id: 7, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard7 },
    { id: 8, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard8 },
    { id: 9, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard9 },
    { id: 10, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard10 },
    { id: 11, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard11 },
    { id: 12, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard12 },
  ];

  return (
    <div className="w-full bg-white py-[48px] lg:py-[80px]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] w-full max-w-[1048px]">
          
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center w-full bg-white hover:shadow-lg transition-shadow duration-300 group">

               <div className="w-full h-[427px] lg:h-[300px] overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
               </div>

               <div className="flex flex-col items-center gap-[10px] pt-[25px] px-[25px] pb-[35px] w-full">

                  <h5 className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#252B42] text-center truncate w-full">
                    {product.title}
                  </h5>
                  <Link to={`/shop/${product.category}`} className="font-['Montserrat'] font-bold text-[14px] leading-[24px] text-[#737373] hover:text-[#23A6F0]">
                    {product.category}
                  </Link>
                  
                  <div className="flex gap-[5px] py-[5px] px-[3px]">
                    <span className="font-['Montserrat'] font-bold text-[16px] text-[#BDBDBD] line-through">
                      {product.oldPrice}
                    </span>
                    <span className="font-['Montserrat'] font-bold text-[16px] text-[#23856D]">
                      {product.newPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-[6px] mt-1">
                     <span className="w-[16px] h-[16px] rounded-full bg-[#23A6F0] cursor-pointer"></span>
                     <span className="w-[16px] h-[16px] rounded-full bg-[#23856D] cursor-pointer"></span>
                     <span className="w-[16px] h-[16px] rounded-full bg-[#E77C40] cursor-pointer"></span>
                     <span className="w-[16px] h-[16px] rounded-full bg-[#252B42] cursor-pointer"></span>
                  </div>

               </div>
            </div>
          ))}

        </div>

 
        <div className="mt-[48px] shadow-md rounded-[6px] border border-[#BDBDBD] bg-white overflow-hidden flex font-bold font-['Montserrat']">
            
            <button className="h-[74px] px-[25px] bg-[#F3F3F3] text-[#BDBDBD] text-[14px] border-r border-[#BDBDBD] hover:bg-gray-200 transition-colors disabled:cursor-not-allowed">
              First
            </button>
            
            <button className="h-[74px] px-[20px] bg-white text-[#23A6F0] text-[14px] border-r border-[#E8E8E8] hover:bg-[#23A6F0] hover:text-white transition-colors">
              1
            </button>
            
            <button className="h-[74px] px-[20px] bg-[#23A6F0] text-white text-[14px] border-r border-[#E8E8E8]">
              2
            </button>
            
            <button className="h-[74px] px-[20px] bg-white text-[#23A6F0] text-[14px] border-r border-[#E8E8E8] hover:bg-[#23A6F0] hover:text-white transition-colors">
              3
            </button>
            
            <button className="h-[74px] px-[25px] bg-white text-[#23A6F0] text-[14px] hover:bg-[#23A6F0] hover:text-white transition-colors">
              Next
            </button>

        </div>

      </div>
    </div>
  );
}