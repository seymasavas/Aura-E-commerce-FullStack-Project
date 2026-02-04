import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";


export default function TeamCta () {
    return (
        <>
        <div className="w-full bg-white font-['Montserrat']">
      
        <div className="container mx-auto px-4 py-[112px] lg:py-[80px]">
            
            <div className="flex flex-col items-center text-center w-full max-w-[607px] mx-auto gap-[30px]">
                
                <h2 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">
                    Start your 14 days free trial
                </h2>
                
                <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] max-w-[411px]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
                </p>
                
                <Link to="/pricing">
                    <button className="bg-[#23A6F0] text-white font-bold text-[14px] leading-[22px] tracking-[0.2px] py-[15px] px-[40px] rounded-[5px] hover:bg-blue-600 transition-colors">
                        Try it free now
                    </button>
                </Link>
                
                <div className="flex items-center gap-[34px] mt-[10px]">
                    
                    <a href="#" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                        <Twitter size={30} fill="#55ACEE" stroke="none" />
                    </a>

                    <a href="#" target="_blank" rel="noreferrer"  className="hover:opacity-80 transition-opacity">
                        <Facebook size={30} fill="#395185" stroke="none" />
                    </a>
                    
                    <a href="#" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                        <Instagram size={30} color="#000000" />
                    </a>
                    
                    <a href="#" target="_blank" rel="noreferrer"    className="hover:opacity-80 transition-opacity">
                        <Linkedin size={30} fill="#0A66C2" stroke="none" />
                    </a>

                </div>

            </div>

        </div>
    </div>
        
        </>
    )
}
