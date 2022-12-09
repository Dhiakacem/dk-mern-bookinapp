
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import { Footer } from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";

import "./home.css";

const Home = () => {
  return (
    <div>
        <Navbar/>  
        <Header/>
        <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Home guests we love </h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
        </div>
    </div>

  )
}

export default Home;