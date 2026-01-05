import content1 from '../assets/content1.jpg'
import content2 from '../assets/content2.jpg'
function Content(){
    return(
        <div className="w-full bg-white font-['Montserrat']">

      <div className="container mx-auto px-4 lg:px-0 lg:max-w-[1050px] py-20">
        
        <div className="flex flex-col-reverse lg:flex-row items-center gap-[50px] lg:gap-[90px]">

          <div className="relative flex flex-row gap-[16px] lg:gap-[16px]">
            <div className="w-[158px] h-[363px] lg:w-[217px] lg:h-[498px] rounded-sm overflow-hidden">
              <img src={content1} className="w-full h-full object-cover"/>
            </div>
            <div className="w-[204px] h-[363px] lg:w-[280px] lg:h-[498px] rounded-sm overflow-hidden">
              <img src={content2} className="w-full h-full object-cover"
              />
            </div>

          </div>

          <div className="flex flex-col items-start gap-4 lg:gap-4 w-[280px] lg:w-[447px]">
            <h5 className="font-bold text-base leading-6 tracking-[0.1px] text-[#23A6F0]">Featured Products</h5>
            <h2 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">We love what we do</h2>
            <div className='lg:w-[400px]'>
                <p className="font-semibold text-sm leading-5 tracking-[0.2px] text-[#737373]">
                Problems trying to resolve the conflict between the two major realms of Classical physics: 
                Newtonian mechanics
                </p>
                <p className="font-semibold text-sm leading-5 tracking-[0.2px] text-[#737373]">
                Problems trying to resolve the conflict between the two major realms of Classical physics: 
                Newtonian mechanics
                </p>
            </div>

          </div>

        </div>
      </div>
    </div>
    )           
}
export default Content;