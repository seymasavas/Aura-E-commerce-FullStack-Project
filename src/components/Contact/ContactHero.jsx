import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import contactimage from "../../assets/contactimage.png"; 

export default function ContactHero() {
  return (
    <div className="w-full  bg-white font-['Montserrat'] overflow-hidden">
      
      <div className="container mx-auto px-4 py-[40px] lg:py-[112px]">
        
        <div className="flex flex-col lg:flex-row lg:justify-around justify-between items-center gap-[30px] ">
            
           
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start w-full lg:w-[399px] gap-[35px]">
                
                <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                    CONTACT US
                </h5>
                
                <h1 className="font-bold text-[40px] leading-[50px] lg:text-[58px] lg:leading-[80px] tracking-[0.2px] text-[#252B42]">
                    Get in touch <br className="hidden lg:block"/> today!
                </h1>
                
                <h4 className="font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373] max-w-[376px]">
                    We know how large objects will act, but things on a small scale
                </h4>
                
                <div className="flex flex-col gap-[5px]">
                    <a href="tel:+451215215" className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] hover:text-[#23A6F0] transition-colors">
                        Phone : +451 215 215
                    </a>
                    <a href="fax:+451215215" className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] hover:text-[#23A6F0] transition-colors">
                        Fax : +451 215 215
                    </a>
                </div>

                <div className="flex items-center gap-[34px] p-[10px]">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                        <Twitter size={30} fill="#252B42" stroke="none" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                        <Facebook size={30} fill="#252B42" stroke="none" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                        <Instagram size={30} className="text-[#252B42]" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                        <Linkedin size={30} fill="#252B42" stroke="none" />
                    </a>
                </div>

            </div>


            <div className="relative w-full lg:w-[715px] min-h-[300px] lg:h-[600px] flex justify-center mt-12 lg:mt-0">
                
                <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 lg:top-0 w-[295px] h-[295px] lg:w-[484px] lg:h-[484px] rounded-full bg-[#FFE9EA] z-0"></div>

                <div className="absolute top-10 left-4 lg:top-10 lg:left-0 w-[47px] h-[47px] lg:w-[77px] lg:h-[77px] rounded-full bg-[#FFE9EA] z-0"></div>

                <div className="absolute bottom-1/3 left-10 lg:bottom-20 w-[14px] h-[14px] rounded-full bg-[#977DF4] z-20"></div>
                <div className="absolute top-20 right-10 lg:right-20 w-[14px] h-[14px] rounded-full bg-[#977DF4] z-20"></div>

                <img 
                    src={contactimage} 
                    alt="Family Shopping"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] max-w-none z-10 lg:relative lg:w-full lg:h-full lg:object-contain lg:scale-125 lg:translate-x-0 lg:translate-y-[-40px] lg:bottom-auto lg:left-auto" 
                />

            </div>
        
        </div>
      </div>
    </div>
  );
}