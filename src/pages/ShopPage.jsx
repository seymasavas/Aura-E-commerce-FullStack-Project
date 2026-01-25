import Clients from "../components/Clients";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";     
import ShopCard from "../components/Shop/ShopCard"; 
import ShopFilter from "../components/Shop/ShopFilter";
import ProductCard from "../components/Shop/ProductCard"; 

function ShopPage() { 
    return (
        <div>
            <Header isShopPage={true} />
            
            <div className="w-full bg-[#FAFAFA] py-[24px]">
                <div className="container mx-auto px-4">
                    
                    <div className="flex flex-col items-center gap-[30px] lg:flex-row lg:justify-between lg:items-center">
                        
                        <h2 className="font-sans font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
                            Shop
                        </h2>

                        <div className="flex items-center gap-[15px] py-[10px]">
                            <Link to="/" className="font-sans font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
                                Home
                            </Link>
                            <ChevronRight className="w-[9px] h-[16px] text-[#BDBDBD]" />
                            <span className="font-sans font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#BDBDBD]">
                                Shop
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <ShopCard/>
            <ShopFilter/>
            <ProductCard />
            <Clients/>
            <Footer/>
        </div>
    )
}

export default ShopPage;