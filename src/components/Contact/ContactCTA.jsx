import { Redo } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <div className="w-full bg-white font-['Montserrat'] overflow-hidden">
      
      <div className="container mx-auto px-4 py-[80px] lg:py-[112px] flex flex-col items-center">
        
        <div className="relative flex flex-col items-center gap-[36px] max-w-[607px]">
            
            
            <div className="absolute -top-18 left-1/3 -translate-x-1/3 lg:left-auto lg:-translate-x-9 lg:right-20 lg:-top-16">
                <Redo 
                    size={80}              
                    className="text-[#23A6F0] rotate-[30deg]" 
                    strokeWidth={1.0}      
                />
            </div>

            <div className="flex flex-col items-center gap-[16px] text-center">
                <h6 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                    WE CAN'T WAIT TO MEET YOU
                </h6>
                <h2 className="font-bold text-[40px] leading-[50px] lg:text-[58px] lg:leading-[80px] tracking-[0.2px] text-[#252B42]">
                    Let’s Talk
                </h2>
            </div>

            <Link to="/pricing">
              <button className="bg-[#23A6F0] hover:bg-blue-600 transition-colors text-white font-bold text-[14px] leading-[22px] tracking-[0.2px] py-[15px] px-[40px] rounded-[5px]">
                  Try it free now
              </button>
            </Link>

        </div>
      </div>
    </div>
  );
}