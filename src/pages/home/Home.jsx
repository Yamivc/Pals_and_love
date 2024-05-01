
import HeaderSection from "../../components/header/HeaderSection";
import Navbar from "../../components/navbar/Navbar";
import MainInfoPanel from "../../components/main-info-panel/MainInfoPanel";
import Footer from "../../components/footer/Footer";

function Home() {
    return (
        <>
        <Navbar/>
            <HeaderSection />
            <MainInfoPanel />
            <Footer/>
        </>
    );
}

export default Home;
