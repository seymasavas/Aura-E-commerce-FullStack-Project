import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
export default function TeamInnerHeader() {
    return (
        <>  
        <div className="w-full bg-white font-['Montserrat']">
      
            <div className="container mx-auto px-4 py-[50px]">
                
                <div className="flex flex-col items-center text-center gap-[16px]">
                    
                    <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#737373]">
                        WHAT WE DO
                    </h5>
                    
                    <h1 className="font-bold text-[40px] leading-[50px] lg:text-[58px] lg:leading-[80px] tracking-[0.2px] text-[#252B42] max-w-[316px] lg:max-w-[788px]">
                        Innovation tailored for you
                    </h1>
                    
                    <div className="flex items-center gap-[15px] py-[10px]">
                        
                        <Link to="/" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42] hover:text-[#737373] transition-colors">
                            Home
                        </Link>
                        
                        <ChevronRight className="w-[9px] h-[16px] text-[#BDBDBD]" />
                        
                        <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                            Team
                        </span>
                        
                    </div>

                </div>

            </div>
     </div>
        
        
    </>
    );
}