
import HeaderSection from "../../components/header/HeaderSection";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MainInfoPanel from "../../components/main-info-panel/MainInfoPanel";
import HomeGallery from "../../components/home-gallery/HomeGallery";
import ArrayImage from "../../components/array-images/ArrayImage"


function Home() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <MainInfoPanel />
      <HomeGallery />
      <ArrayImage />
      <Footer />
    </>
  );
}

export default Home;
