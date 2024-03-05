import "./App.css";
import Brand from "./NavbarComponent/Brand"
import Makeups from "./MakeupComponent/Makeups"
import Navbar from "./NavbarComponent/Navbar"
import Skin from "./MakeupComponent/Skin"
import Hair from "./MakeupComponent/Hair"
import PersonalCare from './MakeupComponent/PersonalCare'
import MomBabyCare from './MakeupComponent/MomBabyCare'
import Frangrance from "./MakeupComponent/Frangrance"
import WomenFashion from './MakeupComponent/WomenFashion'
import { Flex } from '@chakra-ui/react'
import HeroSection from "./HeroComponent/HeroSection"
import HeroSlider from "./HeroComponent/HeroSlider"
import ProductsCard from "./DealDayProductsComponent/ProductsCard"
import BridalContainer from './BridalComponent/BridalContainer'
import PondsLogo from './PondsComponent/PondsLogo'
import BestSeller from './BestSellersComponent/BestSeller'
import LatestProducts from './BestSellersComponent/LatestProducts'
import MostViewed from './BestSellersComponent/MostViewed'
import CholiCollections from './CholiComponent/CholiCollections'
import Footer from './FooterComponent/Footer'

function App() {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
        <Brand />
        <Navbar />
        <Flex
          style={{
            width: "100%",
            position: "absolute",
            height: "98px",
            backgroundColor: "#dd0285",
            gap: "50px",
          }}
        >
          <Flex style={{ gap: "50px", marginLeft: "50px", marginTop: "10px" }}>
            <Makeups />
            <Skin />
            <Hair />
            <PersonalCare />
            <MomBabyCare />
            <Frangrance />
            <WomenFashion />
          </Flex>
        </Flex>
        <div style={{ marginTop: "100px", marginLeft: "40px", marginRight: "50px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px" }}>
          <HeroSection />
          <HeroSlider />
        </div>

        <ProductsCard />
        <BridalContainer />
        <PondsLogo />
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Flex>
            <BestSeller />
            <LatestProducts />
            <MostViewed />
          </Flex>
        </div>
        <CholiCollections />
        <Footer />
      </div>
    </div>
  );
}

export default App;