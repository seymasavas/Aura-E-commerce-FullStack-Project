
import abouttestimonials from "../../assets/abouttestimonials.jpg";
import { Link } from "react-router-dom";

export default function AboutTestimonials() {
   return(
    <>
       <div className="relative w-full lg:h-[636px] bg-[#2A7CC7] font-['Montserrat'] overflow-hidden flex items-center">
      
        <div className="hidden lg:block absolute top-0 right-0 h-full w-1/3">
            <img 
                src={abouttestimonials} 
                alt="Team Working" 
                className="w-full h-full object-cover" 
            />
        </div>

        <div className="container mx-auto px-4 py-16 lg:py-[112px] relative z-10">
            
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white lg:w-1/2 gap-[24px] lg:pl-50">
                
                <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px]">
                    WORK WITH US
                </h5>
                
                <h2 className="font-bold text-[40px] leading-[50px] tracking-[0.2px]">
                    Now Let’s grow Yours
                </h2>
                
                <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-white/90 max-w-[440px]">
                    The gradual accumulation of information about atomic and 
                    small-scale behavior during the first quarter of the 20th 
                </p>
                
                <Link to="/contact">
                    <button className="mt-[10px] py-[15px] px-[40px] border border-[#FAFAFA] rounded-[5px] font-bold text-[14px] leading-[22px] tracking-[0.2px] hover:bg-white hover:text-[#2A7CC7] transition-colors">
                        Button
                    </button>
                </Link>

            </div>
      </div>

    </div>
    </>
   )
}