import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
        
          <Route path='/'component= {<Home />} />
          <Route path='/services' component= {<Services />} />
          <Route path='/products' component= {<Products />} />
          <Route path='/sign-up' component= {<SignUp />} />
        
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
