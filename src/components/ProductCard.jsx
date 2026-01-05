import productcard1 from '../assets/productcard1.jpg' 
import productcard2 from '../assets/productcard2.jpg'
import productcard3 from '../assets/productcard3.jpg'
import productcard4 from '../assets/productcard4.jpg'
import productcard5 from '../assets/productcard5.jpg'
import productcard6 from '../assets/productcard6.jpg'
import productcard7 from '../assets/productcard7.jpg'
import productcard8 from '../assets/productcard8.jpg'

function ProductCard() {

  const products = [
    { id: 1, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard1 },
    { id: 2, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard2 },
    { id: 3, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard3 },
    { id: 4, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard4 },
    { id: 5, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard5 },
    { id: 6, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard1 },
    { id: 7, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard6 },     
    { id: 8, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard7 },
    { id: 9, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard8 },
    { id: 10, title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: productcard3 },
  ];

  return (
    <div className="w-full bg-white font-sans">
      
      <div className="container mx-auto px-4 lg:px-0 lg:max-w-[1124px] py-20 flex flex-col items-center gap-6 lg:gap-6">

        <div className="flex flex-col items-center gap-[10px] text-center max-w-[692px]">
          <h4 className="hidden lg:block font-normal text-xl leading-[30px] tracking-[0.2px] text-[#737373]">Featured Products</h4>
          <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">BESTSELLER PRODUCTS</h3>
          <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]">Problems trying to resolve the conflict between </p>
        </div>


        <div className="flex flex-wrap justify-center gap-[30px] w-full">
          {products.map((product, index) => (
            <div 
                key={product.id} 
                className={`flex-col items-center w-full max-w-[295px] lg:max-w-[183px] ${index > 4 ? 'hidden lg:flex' : 'flex'}`}
            >
              
              <div className="w-full h-[360px] lg:h-[238px] mb-[25px]">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col items-center gap-[10px] pb-[35px]">
                
                <h5 className="font-bold text-base leading-6 tracking-[0.1px] text-[#252B42] text-center">
                  {product.title}
                </h5>
                
                <a href="#" className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373] text-center hover:text-[#23A6F0] transition-colors">
                  {product.category}
                </a>

                <div className="flex gap-[5px] px-[3px] py-[5px]">
                  <span className="font-bold text-base leading-6 tracking-[0.1px] text-[#BDBDBD]">
                    {product.oldPrice}
                  </span>
                  <span className="font-bold text-base leading-6 tracking-[0.1px] text-[#23856D]">
                    {product.newPrice}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        <button className="mt-8 lg:mt-4 py-[15px] px-10 bg-white border border-[#23A6F0] rounded-[5px] text-[#23A6F0] font-bold text-sm leading-[22px] tracking-[0.2px] hover:bg-[#23A6F0] hover:text-white transition-all uppercase">
          LOAD MORE PRODUCTS
        </button>

      </div>
    </div>
  );
}

export default ProductCard;