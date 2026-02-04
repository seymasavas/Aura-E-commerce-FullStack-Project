import { Phone, MapPin, Send } from "lucide-react";

export default function ContactInfoCards() {
  return (
    <div className="w-full bg-white font-['Montserrat']">
      
      <div className="container mx-auto px-4 py-[112px]">
        
        <div className="flex flex-col items-center text-center mb-[80px]">
             <h6 className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42] mb-[10px]">
                VISIT OUR OFFICE
             </h6>
             <h2 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] max-w-[531px]">
                We help small businesses with big ideas
             </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-[30px] lg:gap-0">
            
            <div className="flex flex-col items-center bg-white p-[50px_40px] gap-[15px] w-full max-w-[328px] h-[343px]  z-10 lg:rounded-l-sm">
                
                <Phone size={72} className="text-[#23A6F0]" strokeWidth={1} />
                
                <div className="text-center flex flex-col">
                    <a href="mailto:georgia.young@example.com" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42] hover:text-[#23A6F0]">
                        georgia.young@example.com
                    </a>
                    <a href="mailto:georgia.young@ple.com" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42] hover:text-[#23A6F0]">
                        georgia.young@ple.com
                    </a>
                </div>

                <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                    Get Support
                </h5>

                
                <button className="text-[#23A6F0] border border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors font-bold text-[14px] leading-[24px] px-[36px] py-[15px] rounded-[5px] lg:rounded-[37px]">
                    Submit Request
                </button>
            </div>

            <div className="flex flex-col items-center bg-[#252B42] p-[80px_40px] gap-[15px] w-full max-w-[328px] lg:h-[403px] shadow-lg z-20 rounded-[5px] lg:rounded-none">
                
                <MapPin size={72} className="text-[#23A6F0]" strokeWidth={1} />
                
                <div className="text-center flex flex-col text-white">
                    <a href="mailto:georgia.young@example.com" className="font-bold text-[14px] leading-[24px] tracking-[0.2px]  hover:text-[#23A6F0]">
                        georgia.young@example.com
                    </a>
                    <a href="mailto:georgia.young@ple.com" className="font-bold text-[14px] leading-[24px] tracking-[0.2px]  hover:text-[#23A6F0]">
                        georgia.young@ple.com
                    </a>
                </div>

                <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white">
                    Get Support
                </h5>

                <button className="text-[#23A6F0] border border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors font-bold text-[14px] leading-[24px] px-[36px] py-[15px] rounded-[5px] lg:rounded-[37px]">
                    Submit Request
                </button>
            </div>


            <div className="flex flex-col items-center bg-white p-[50px_40px] gap-[15px] w-full max-w-[328px] h-[343px]  z-10 lg:rounded-r-sm">
                
                <Send size={72} className="text-[#23A6F0]" strokeWidth={1} />
                
                <div className="text-center flex flex-col">
                    <a href="mailto:georgia.young@example.com" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42] hover:text-[#23A6F0]">
                        georgia.young@example.com
                    </a>
                    <a href="mailto:georgia.young@ple.com" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42] hover:text-[#23A6F0]">
                        georgia.young@ple.com
                    </a>
                </div>

                <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                    Get Support
                </h5>

                <button className="text-[#23A6F0] border border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors font-bold text-[14px] leading-[24px] px-[36px] py-[15px] rounded-[5px] lg:rounded-[37px]">
                    Submit Request
                </button>
            </div>

        </div>

      </div>
    </div>
  );
}