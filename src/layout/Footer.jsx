import { Facebook, FacebookIcon, Instagram, LucideFacebook, Twitter } from "lucide-react";

function    Footer() {

    return ( 
     <footer className="w-full px-[30px] flex flex-col items-center bg-white font-sans">

        {/* En üst Marka adı ve sosyal medya bölümü */}
        <div className="w-full bg-white border-b border-[#E6E6E6]">
            <div className="container mx-auto px-4 lg:px-0 lg:max-w-[1050px] py-10 flex flex-col lg:flex-row justify-between items-start gap-[11.5px] lg:gap-0">
                
                {/* Aura */}
                <h3 className="text-[#252B42] font-bold text-2xl tracking-[0.1px]">Aura</h3>
                
                {/* Sosyal medya ikonları*/}
                <div className="flex gap-5 text-[#23A6F0]">
                    <a href="#" className="hover:text-blue-400 transition-colors">
                        <Facebook className="w-[25.76px] h-[30.76px]" />
                    </a>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                        <Instagram className="w-[25.76px] h-[30.76px]"/>    
                    </a>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                        <Twitter className="w-[25.76px] h-[30.76px]"/>
                    </a>
                </div>
            </div>
        </div>

        {/* Ana içerik- iletişim vs linkler */}
        <div className="w-full bg-white py-[70px]">
            <div className="container mx-auto px-4 lg:px-0 lg:max-w-[1050px] flex flex-col lg:flex-row gap-[30px]">
                
                {/* Company info */}
                <div className="flex flex-col gap-5 lg:w-[148px]">
                    <h5 className="text-[#252B42] font-bold text-base tracking-[0.1px]">Company Info</h5>
                    <nav className="flex flex-col gap-2.5">
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">About Us</a>
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">Carrier</a>
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">We are hiring</a>
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">Blog</a>
                    </nav>
                </div>

                {/* legal */}
                <div className="flex flex-col gap-5 lg:w-[152px]">
                    <h5 className="text-[#252B42] font-bold text-base tracking-[0.1px]">Legal</h5>
                    <nav className="flex flex-col gap-2.5">
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">About Us</a>
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">Carrier</a>
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">We are hiring</a>
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">Blog</a>
                    </nav>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-5 lg:w-[148px]">
                    <h5 className="text-[#252B42] font-bold text-base tracking-[0.1px]">Features</h5>
                    <nav className="flex flex-col gap-2.5">
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">Business Marketing</a>
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">User Analytic</a>
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">Live Chat</a>
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">Unlimited Support</a>
                    </nav>
                </div>

                {/* Resources */}
                <div className="flex flex-col gap-5 lg:w-[152px]">
                    <h5 className="text-[#252B42] font-bold text-base tracking-[0.1px]">Resources</h5>
                    <nav className="flex flex-col gap-2.5">
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">IOS & Android</a>
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">Watch a Demo</a>
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">Customers</a>
                        <a href="#" className="text-[#737373] font-bold text-sm tracking-[0.2px] hover:text-[#23A6F0] transition-colors">API</a>
                    </nav>
                </div>

                {/* iletisim kutusu*/}
                <div className="flex flex-col gap-5 lg:w-[321px]">
                    <h5 className="text-[#252B42] font-bold text-base tracking-[0.1px]">Get In Touch</h5>
                    <div className="flex flex-col gap-2.5">
                        <div className="relative flex">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="w-full h-[58px] bg-[#F9F9F9] border border-[#E6E6E6] rounded-l-[5px] rounded-r-none px-5 text-[#737373] text-sm font-normal tracking-[0.2px] outline-none focus:border-[#23A6F0] transition-colors"
                            />
                            <button className="h-[58px] bg-[#23A6F0] text-white px-[22.5px] rounded-r-[5px] rounded-l-none text-sm font-normal tracking-[0.2px] border border-[#23A6F0] hover:bg-blue-500 transition-colors">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-[#737373] text-xs font-normal tracking-[0.2px]">Lorem impsum dolor amit</p>
                    </div>
                </div>

            </div>
        </div>

        {/* Copyright */}
        <div className="w-full bg-[#FAFAFA] py-[25px]">
            <div className="container mx-auto px-4 lg:px-0 lg:max-w-[1050px] flex flex-col lg:flex-row justify-between items-center">
                <h6 className="w-[216px] lg:w-auto text-[#737373] font-bold text-sm leading-6 text-center lg:text-left tracking-[0.2px]">
                    Made With Love By Figmaland All Right Reserved
                </h6>
            </div>
        </div>
</footer>

    )   
 }      
export default Footer;