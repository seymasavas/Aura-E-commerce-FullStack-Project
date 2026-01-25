import Clients from "../components/Clients";
import HomeShopCard from "../components/Home/HomeShopCard";
import HomeProductCard from "../components/Home/HomeProductCard";
import Content from "./../components/Content";
import Features from "../components/Features";
import Blog from "../components/Blog";

function PageContent() {


    return(
        <div>
        <Clients/>
        <HomeShopCard/>
        <HomeProductCard/>
        <Content/>
        <Features/>
        <Blog/>
        </div>
    )
}
export default PageContent;