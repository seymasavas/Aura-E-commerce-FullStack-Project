import hooli from '../assets/hooli.png';
import lyft from '../assets/lyft.png';
import piedpiper from '../assets/piedpiper.png';
import stripe from '../assets/stripe.png';
import aws from '../assets/aws.png';
import reddit from '../assets/reddit.png';

function Clients() {
    return ( 
      <div className="w-full bg-[#FAFAFA] md:bg-white py-[50px]">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-center items-center gap-[60px]  lg:px-[80px]">
            {/*Hooli*/}
            <div className="w-[149px] h-[50px] lg:w-[103px] lg:h-[34px] flex justify-center items-center">
              <img src={hooli} className=" opacity-40"/>
            </div>

            {/* Lyft */}
            <div className="w-[139px] h-[99px] lg:w-[83px] lg:h-[59px] flex justify-center items-center">
              <img src={lyft} className=" opacity-40"/>
            </div>

            {/* Pied Piper */}
            <div className="w-[149px] h-[109px] lg:w-[102px] lg:h-[75px] flex justify-center items-center">
              <img src={piedpiper} className=" opacity-40"/>
            </div>

            {/* Stripe */}
            <div className="w-[149px] h-[60px] lg:w-[103px] lg:h-[42px] flex justify-center items-center">
              <img  src={stripe} className=" opacity-40"/>
            </div>

            {/* AWS */}
            <div className="w-[153px] h-[92px] lg:w-[104px] lg:h-[62px] flex justify-center items-center">
              <img src={aws} className="opacity-60 grayscale"/>
            </div>

            {/* Reddit */}
            <div className="w-[149px] h-[142px] lg:w-[76px] lg:h-[72px] flex justify-center items-center">
              <img src={reddit}  className="opacity-40"/>
            </div>

          </div>
        </div>
    </div>
     );
}
export default Clients;