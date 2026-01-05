import Clients from "../components/Clients";
import ShopCard from "../components/ShopCard";
import ProductCard from "../components/ProductCard";
import Content from "./../components/Content";
import Features from "../components/Features";
import Blog from "../components/Blog";

function PageContent() {


    return(
        <div>
        <Clients/>
        <ShopCard/>
        <ProductCard/>
        <Content/>
        <Features/>
        <Blog/>
        </div>
    )
}
export default PageContent;