import shopcard1 from '../../assets/shopcard1.png'
import shopcard2 from '../../assets/shopcard2.png'
import shopcard3 from '../../assets/shopcard3.png'


function HomeShopCard() {


  return(
<div className="w-full bg-white font-sans">
      <div className="container mx-auto px-4 lg:px-0 lg:max-w-[1185px] py-6 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-[15px] lg:gap-[30px]">
          
          {/* Sol card */}
          <div className="relative w-full h-[556px] lg:h-[572px] flex-shrink-0 lg:w-[52%]">
            <img src={shopcard1} className="w-full h-full object-cover"/>
       
            <div className="absolute bottom-0 left-0 w-full lg:w-auto bg-[#2D8BC0]/75 p-8 lg:py-[60px] lg:px-[66px] flex flex-col gap-[30px] hover:bg-[#2D8BC0]/85 transition-colors">
              <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-white w-[70%] lg:w-[192px]">
                Top Product Of the Week
              </h3>
              <button className="border border-white rounded-[5px] py-[15px] px-10 text-white font-bold text-sm leading-[22px] tracking-[0.2px] hover:bg-white hover:text-[#2D8BC0] transition-colors w-fit uppercase">
                Explore Items
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] lg:gap-[30px] w-full lg:w-[48%]">
            
            {/* sağ üst card  */}
            <div className="relative w-full h-[398px] lg:h-[271px]">
              <img src={shopcard2} className="w-full h-full object-cover"/>
              <div className="absolute bottom-0 left-0 w-full lg:w-auto bg-[#2D8BC0]/75 p-8 lg:py-[40px] lg:px-9 flex flex-col gap-[20px] lg:block hover:bg-[#2D8BC0]/85 transition-colors">
                <h4 className="font-bold lg:font-normal text-2xl lg:text-xl leading-[30px] tracking-[0.2px] text-white mb-0 lg:mb-[22px] w-[70%] lg:w-[190px]">
                  Top Product Of the Week
                </h4>
                <button className="border border-white rounded-[5px] py-[15px] px-10 text-white font-bold text-sm leading-[22px] tracking-[0.2px] hover:bg-white hover:text-[#2D8BC0] transition-colors w-fit uppercase">
                  Explore Items
                </button>
              </div>
            </div>

            {/* sağ alt card */}
            <div className="relative w-full h-[398px] lg:h-[271px]">
              <img src={shopcard3} className="w-full h-full object-cover"/>

              <div className="absolute bottom-0 left-0 w-full lg:w-auto bg-[#2D8BC0]/75 p-8 lg:py-[40px] lg:px-9 flex flex-col gap-[20px] lg:block hover:bg-[#2D8BC0]/85 transition-colors">
                <h4 className="font-bold lg:font-normal text-2xl lg:text-xl leading-[30px] tracking-[0.2px] text-white mb-0 lg:mb-[22px] w-[70%] lg:w-[190px]">
                  Top Product Of the Week
                </h4>
                <button className="border border-white rounded-[5px] py-[15px] px-10 text-white font-bold text-sm leading-[22px] tracking-[0.2px] hover:bg-white hover:text-[#2D8BC0] transition-colors w-fit uppercase">
                  Explore Items
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    
  ) 
}

export default HomeShopCard;