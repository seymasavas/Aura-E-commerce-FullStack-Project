import Header from '../layout/Header';
import Footer from '../layout/Footer';  
import ProductOverview from '../components/ProductDetail/ProductOverview';
import ProductDescription from '../components/ProductDetail/ProductDescription';
import ProductCrd from '../components/ProductDetail/ProductCrd';
function ProductDetailPage() { 

    return (
        <div>
            
            <Header/>
            <ProductOverview/>
            <ProductDescription/>
            <ProductCrd/>
            <Footer/>
        </div>
    )
} 
export default ProductDetailPage;