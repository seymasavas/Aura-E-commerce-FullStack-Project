
import hooli from "../../assets/hooli.png"; 
import lyft from "../../assets/lyft.png"; 
import piedpiper from "../../assets/piedpiper.png"; 
import stripe from "../../assets/stripe.png";
import aws from "../../assets/aws.png";
import reddit from "../../assets/reddit.png"; 

export default function AboutClients() {
  
  const clients = [
    { id: 1, image: hooli, address:"hooli.io" },
    { id: 2, image: lyft , address:"lyft.com" },
    { id: 3, image: piedpiper, address:"piedpiper.com" },
    { id: 4, image: stripe, address:"stripe.com" },
    { id: 5, image: aws, address:"aws.com" },
    { id: 6, image: reddit, address:"reddit.com" },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] font-['Montserrat']">
      
      <div className="container mx-auto px-4 py-[80px]">
        
        <div className="flex flex-col items-center text-center gap-[30px] mb-[50px]">
            <h2 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] max-w-[287px] lg:max-w-full">
                Big Companies Are Here
            </h2>
            <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] max-w-[328px] lg:max-w-[547px]">
                Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics 
            </p>
        </div>

    
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[60px] lg:gap-[30px]">
            
            {clients.map((client) => (
                <div key={client.id} className="flex justify-center items-center w-[150px] h-[75px]">
                    
                    <a 
                    key={client.id} 
                    href={`https://${client.address}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex justify-center items-center w-[150px] h-[75px] hover:scale-110 transition-transform"
                >
                    <img 
                        src={client.image} 
                        alt={`Client ${client.address}`} 
                        className="max-w-full max-h-full object-contain grayscale opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                </a>
                </div>
            ))}

        </div>

      </div>
    </div>
  );
}