import './App.css'
import Footer from '/src/layout/Footer.jsx'
import Header from '/src/layout/Header.jsx'
import PageContent from '/src/layout/PageContent.jsx'
import HomePage from '/src/pages/HomePage.jsx'
import Pricing from '/src/pages/Pricing.jsx'
import About from '/src/pages/About.jsx'
import CartPage from '/src/pages/CartPage.jsx'
import Contact from '/src/pages/Contact.jsx'
import ProductDetailPage from '/src/pages/ProductDetailPage.jsx'
import ProductListPage from '/src/pages/ProductListPage.jsx'
import ShopPage from '/src/pages/ShopPage.jsx'
import Team from '/src/pages/Team.jsx'
import {Route, Routes} from 'react-router-dom'


function App() {
  

  return (
    <>
      <div>
            <Routes>
              <Route path="/" exact element={<HomePage/>}/>
              <Route path="/pricing" element={<Pricing/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/productdetail" element={<ProductDetailPage/>}/>
              <Route path="/productlist" element={<ProductListPage/>}/>
              <Route path="/shop" element={<ShopPage/>} />
              <Route path="/team" element={<Team/>}/>
            </Routes>
      </div>

    </>
  )
}

export default App;
