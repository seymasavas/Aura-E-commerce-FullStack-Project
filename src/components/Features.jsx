import { BookOpen, Book, TrendingUp } from 'lucide-react';
function Features (){

    return (
        <div className="w-full bg-white font-['Montserrat']">

      <div className="container mx-auto px-4 lg:px-0 lg:max-w-[1050px] py-20 flex flex-col items-center gap-[80px]">

        <div className="flex flex-col items-center gap-[10px] text-center w-full max-w-[692px]">
          <h4 className="font-normal text-xl leading-[30px] tracking-[0.2px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] uppercase">
            THE BEST SERVICES
          </h3>
          <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]">
            Problems trying to resolve the conflict between 
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[30px] justify-center items-center w-full">
          
          {/*Easy Wins */}
          <div className="flex flex-col items-center w-full max-w-[328px]">
            <div className="flex flex-col items-center p-[35px_40px] gap-5 bg-white rounded-[10px]  w-[315px] lg:w-[328px]">
              
              <div className="text-[#23A6F0]">
                <BookOpen width={72} height={72}  />
              </div>
              <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] text-center">Easy Wins</h3>
              <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#737373] text-center w-[225px]">
                Get your best looking smile now!
              </p>
            </div>
          </div>

          {/* Concrete */}
          <div className="flex flex-col items-center w-full max-w-[328px]">
            <div className="flex flex-col items-center p-[35px_40px] gap-5 bg-white rounded-[10px]  w-[315px] lg:w-[328px]">
              
              <div className="text-[#23A6F0]">
                 <Book width={72} height={72} />
              </div>
              <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] text-center">Concrete</h3>
              <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#737373] text-center w-[225px]">
                Defalcate is most focused in helping you discover your most beautiful smile
              </p>
            </div>
          </div>

          {/*  Growth */}
          <div className="flex flex-col items-center w-full max-w-[328px]">
            <div className="flex flex-col items-center p-[35px_40px] gap-5 bg-white rounded-[10px]  w-[315px] lg:w-[328px]">
              
              <div className="text-[#23A6F0]">
                <TrendingUp width={72} height={72} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] text-center">Hack Growth</h3>
              <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#737373] text-center w-[225px]">Overcame any hurdle or any other problem.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
    )
}
export default Features;