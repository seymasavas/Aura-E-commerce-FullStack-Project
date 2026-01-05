import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blogmobil1 from "../assets/blogmobil1.jpg";
import blogmobil2 from "../assets/blogmobil2.jpg";
import { Clock, ChartArea, ChevronRight, Heart, ShoppingCart, Eye, Star, Download, ChartSpline } from "lucide-react";

function Blog() {
    return (
        <div className="w-full bg-white font-['Montserrat']">
        
            <div className="container mx-auto px-4 lg:px-0 lg:max-w-[1050px] py-[80px] flex flex-col items-center gap-[80px]">

                <div className="flex flex-col items-center gap-[10px] text-center max-w-[692px]">
                    <h6 className="font-bold text-sm text-[#23A6F0]">Practice Advice</h6>
                    <h2 className="font-bold text-[40px] leading-[50px] text-[#252B42]">Featured Posts</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-full">

                    <div className="w-full flex justify-center">

                        {/* sol-post mobil*/}
                        <div className="flex flex-col bg-white shadow-md lg:hidden w-[328px] rounded-[3px] overflow-hidden">
                            <div className="relative w-full h-[300px]">
                                <img src={blogmobil1} alt="Post 1" className="w-full h-full object-cover" />
                                <div className="absolute top-[20px] left-[20px] bg-[#E74040] text-white font-bold text-sm px-[10px] rounded-[3px] shadow-sm uppercase leading-[24px]">
                                    NEW
                                </div>
                            </div>
                            <div className="flex flex-col p-[25px] gap-[10px]">
                                <div className="flex gap-[15px] text-xs">
                                    <span className="text-[#8EC2F2]">Google</span>
                                    <span className="text-[#737373]">Trending</span>
                                    <span className="text-[#737373]">New</span>
                                </div>
                                <h4 className="font-normal text-xl leading-[30px] text-[#252B42]">Loudest à la Madison #1 (L'integral)</h4>
                                <p className="font-normal text-sm leading-[20px] text-[#737373]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                                <div className="flex justify-between items-center py-[15px]">
                                    <div className="flex items-center gap-[5px]">
                                        <Clock className="w-[16px] h-[16px] text-[#23A6F0]" />
                                        <span className="text-xs text-[#737373]">22 April 2021</span>
                                    </div>
                                    <div className="flex items-center gap-[5px]">
                                        <ChartArea className="w-[16px] h-[16px] text-[#23856D]" />
                                        <span className="text-xs text-[#737373]">10 comments</span>
                                    </div>
                                </div>
                                <a href="#" className="flex items-center  font-bold text-sm text-[#737373] hover:text-[#23A6F0]">
                                    Learn More <ChevronRight className="w-[9px] h-[16px] text-[#23A6F0]" />
                                </a>
                            </div>
                        </div>

                        {/* sol post-masaüstü */}
                        <div className="hidden lg:flex flex-row bg-white w-[501px] h-[404px]">
                            <div className="relative w-[209px] h-[404px] flex-shrink-0">
                                <img src={blog1} alt="Post 1 Desktop" className="w-full h-full object-cover" />
                                <div className="absolute top-[20px] left-[20px] bg-[#E74040] text-white font-bold text-sm px-[10px] rounded-[3px] uppercase leading-[24px]">
                                    SALE
                                </div>
                                <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 flex gap-[10px]">
                                    <button className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                                        <Heart className="w-[20px] h-[20px] text-[#252B42]" />
                                    </button>
                                    <button className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                                        <ShoppingCart className="w-[20px] h-[20px] text-[#252B42]" />
                                    </button>
                                    <button className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                                        <Eye className="w-[20px] h-[20px] text-[#252B42]" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col p-[25px] justify-center gap-[10px] border border-l-0 border-[#E6E6E6] w-[292px] h-[404px]">
                                <div className="flex justify-between items-center w-full">
                                    <span className="font-bold text-sm text-[#23A6F0]">English Department</span>
                                    <div className="bg-[#252B42] rounded-[20px] px-[10px] py-[5px] flex items-center gap-[5px]">
                                        <Star className="w-[16px] h-[16px] text-[#FFCE31] fill-[#FFCE31]" />
                                        <span className="text-xs text-white">4.9</span>
                                    </div>
                                </div>
                                <h5 className="font-bold text-base text-[#252B42]">Loudest à la Madison #1 (L'integral)</h5>
                                <p className="font-normal text-sm text-[#737373] line-clamp-2">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                                <div className="flex items-center gap-[10px] py-[5px]">
                                    <Download className="w-[16px] h-[16px] text-[#737373]" />
                                    <span className="font-bold text-sm text-[#737373]">15 Sales</span>
                                </div>
                                <div className="flex gap-[5px]">
                                    <span className="font-bold text-base text-[#BDBDBD]">$16.48</span>
                                    <span className="font-bold text-base text-[#23856D]">$6.48</span>
                                </div>
                                <div className="flex gap-[6px] py-[5px]">
                                    <span className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></span>
                                    <span className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></span>
                                    <span className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></span>
                                    <span className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></span>
                                </div>
                                <div className="flex justify-between items-center mt-auto pt-[15px]">
                                    <div className="flex items-center gap-[5px]">
                                        <Clock className="w-[16px] h-[16px] text-[#737373]" />
                                        <span className="text-xs text-[#737373]">22 April 2021</span>
                                    </div>

                                     <div className="flex items-center gap-[5px]">
                                        <ChartSpline className="w-[16px] h-[16px] text-[#23856D]" />
                                        <span className="text-xs text-[#737373]">64 lessons</span>
                                    </div>
                                     <div className="flex items-center gap-[5px]">
                                        <ChartArea className="w-[16px] h-[16px] text-[#23856D]" />
                                        <span className="text-xs text-[#737373]">Progress</span>
                                    </div>
                                    
                                </div>
                                <button className="flex items-center w-[140px] px-[20px] py-[10px] border border-[#23A6F0] rounded-[37px] text-[#23A6F0] font-bold text-sm hover:bg-[#23A6F0] hover:text-white transition-all">
                                       Learn  More <ChevronRight className="w-[9px] h-[16px]" />
                                    </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center">

                        {/* sağ post-mobil*/}
                        <div className="flex flex-col bg-white shadow-md lg:hidden w-[328px] rounded-[3px] overflow-hidden">
                            <div className="relative w-full h-[300px]">
                                <img src={blogmobil2} alt="Post 2" className="w-full h-full object-cover" />
                                <div className="absolute top-[20px] left-[20px] bg-[#E74040] text-white font-bold text-sm px-[10px] rounded-[3px] shadow-sm uppercase leading-[24px]">
                                    NEW
                                </div>
                            </div>
                            <div className="flex flex-col p-[25px] gap-[10px]">
                                <div className="flex gap-[15px] text-xs">
                                    <span className="text-[#8EC2F2]">Google</span>
                                    <span className="text-[#737373]">Trending</span>
                                    <span className="text-[#737373]">New</span>
                                </div>
                                <h4 className="font-normal text-xl leading-[30px] text-[#252B42]">Loudest à la Madison #1 (L'integral)</h4>
                                <p className="font-normal text-sm leading-[20px] text-[#737373]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                                <div className="flex justify-between items-center py-[15px]">
                                    <div className="flex items-center gap-[5px]">
                                        <Clock className="w-[16px] h-[16px] text-[#23A6F0]" />
                                        <span className="text-xs text-[#737373]">22 April 2021</span>
                                    </div>
                                    <div className="flex items-center gap-[5px]">
                                        <ChartArea className="w-[16px] h-[16px] text-[#23856D]" />
                                        <span className="text-xs text-[#737373]">64 Lessons</span>
                                    </div>
                                </div>
                                <a href="#" className="flex items-center gap-[10px] font-bold text-sm text-[#737373] hover:text-[#23A6F0]">
                                    Learn More <ChevronRight className="w-[9px] h-[16px] text-[#23A6F0]" />
                                </a>
                            </div>
                        </div>

                        {/* sağ post-masaüstü */}
                        <div className="hidden lg:flex flex-row bg-white w-[501px] h-[404px]">
                            <div className="relative w-[209px] h-[404px] flex-shrink-0">
                                <img src={blog2} alt="Post 2 Desktop" className="w-full h-full object-cover" />
                                <div className="absolute top-[20px] left-[20px] bg-[#E74040] text-white font-bold text-sm px-[10px] rounded-[3px] uppercase leading-[24px]">
                                    SALE
                                </div>
                                <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 flex gap-[10px]">
                                    <button className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                                        <Heart className="w-[20px] h-[20px] text-[#252B42]" />
                                    </button>
                                    <button className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                                        <ShoppingCart className="w-[20px] h-[20px] text-[#252B42]" />
                                    </button>
                                    <button className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                                        <Eye className="w-[20px] h-[20px] text-[#252B42]" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col p-[25px] justify-center gap-[10px] border border-l-0 border-[#E6E6E6] w-[292px] h-[404px]">
                                <div className="flex justify-between items-center w-full">
                                    <span className="font-bold text-sm text-[#23A6F0]">English Department</span>
                                    <div className="bg-[#252B42] rounded-[20px] px-[10px] py-[5px] flex items-center gap-[5px]">
                                        <Star className="w-[16px] h-[16px] text-[#FFCE31] fill-[#FFCE31]" />
                                        <span className="text-xs text-white">4.9</span>
                                    </div>
                                </div>
                                <h5 className="font-bold text-base text-[#252B42]">Loudest à la Madison #1 (L'integral)</h5>
                                <p className="font-normal text-sm text-[#737373] line-clamp-2">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                                <div className="flex items-center gap-[10px] py-[5px]">
                                    <Download className="w-[16px] h-[16px] text-[#737373]" />
                                    <span className="font-bold text-sm text-[#737373]">15 Sales</span>
                                </div>
                                <div className="flex gap-[5px]">
                                    <span className="font-bold text-base text-[#BDBDBD]">$16.48</span>
                                    <span className="font-bold text-base text-[#23856D]">$6.48</span>
                                </div>
                                <div className="flex gap-[6px] py-[5px]">
                                    <span className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></span>
                                    <span className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></span>
                                    <span className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></span>
                                    <span className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></span>
                                </div>
                                <div className="flex justify-between items-center mt-auto pt-[15px]">
                                    <div className="flex items-center gap-[5px]">
                                        <Clock className="w-[16px] h-[16px] text-[#737373]" />
                                        <span className="text-xs text-[#737373]">22 April 2021</span>
                                    </div>
                                    <div className="flex items-center gap-[5px]">
                                        <ChartSpline className="w-[16px] h-[16px] text-[#23856D]" />
                                        <span className="text-xs text-[#737373]">64 lessons</span>
                                    </div>
                                     <div className="flex items-center gap-[5px]">
                                        <ChartArea className="w-[16px] h-[16px] text-[#23856D]" />
                                        <span className="text-xs text-[#737373]">Progress</span>
                                    </div>

                                </div>  
                                   <button className="flex w-[140px] items-center  px-[20px] py-[10px] border border-[#23A6F0] rounded-[37px] text-[#23A6F0] font-bold text-sm hover:bg-[#23A6F0] hover:text-white transition-all">
                                      Learn  More <ChevronRight className="w-[9px] h-[16px]" />
                                    </button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Blog;