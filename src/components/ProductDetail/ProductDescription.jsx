import { ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
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

export default function ProductDescription() {
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

    const selectedImage=imageLookup[productId];

      
      ;
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
                    the quick fox jumps over 
                </h3>
                
                <div className="font-['Montserrat'] font-[400] text-[14px] leading-[20px] text-[#737373] flex flex-col gap-[20px]">
                    <p>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                    <p>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                    <p>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-[332px] flex flex-col gap-[30px]">
                
                <div className="flex flex-col gap-[30px]">
                    <h3 className="font-['Montserrat'] font-[700] text-[24px] text-[#252B42]">
                        the quick fox jumps over 
                    </h3>
                    
                    <div className="flex flex-col gap-[10px]">

                        <div className="flex items-center gap-[20px]">
                            <ChevronRight size={16} className="text-[#737373]" />
                            <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">the quick fox jumps over the lazy dog</span>
                        </div>
                        <div className="flex items-center gap-[20px]">
                            <ChevronRight size={16} className="text-[#737373]" />
                            <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">the quick fox jumps over the lazy dog</span>
                        </div>
                        <div className="flex items-center gap-[20px]">
                            <ChevronRight size={16} className="text-[#737373]" />
                            <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">the quick fox jumps over the lazy dog</span>
                        </div>
                        <div className="flex items-center gap-[20px]">
                            <ChevronRight size={16} className="text-[#737373]" />
                            <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">the quick fox jumps over the lazy dog</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[30px]">
                    <h3 className="font-['Montserrat'] font-[700] text-[24px] text-[#252B42]">
                        the quick fox jumps over 
                    </h3>
                    
                    <div className="flex flex-col gap-[10px]">
                        <div className="flex items-center gap-[20px]">
                            <ChevronRight size={16} className="text-[#737373]" />
                            <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">the quick fox jumps over the lazy dog</span>
                        </div>
                        <div className="flex items-center gap-[20px]">
                            <ChevronRight size={16} className="text-[#737373]" />
                            <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">the quick fox jumps over the lazy dog</span>
                        </div>
                        <div className="flex items-center gap-[20px]">
                            <ChevronRight size={16} className="text-[#737373]" />
                            <span className="font-['Montserrat'] font-[700] text-[14px] text-[#737373]">the quick fox jumps over the lazy dog</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>

      </div>
    </div>
  );
}