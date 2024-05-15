import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Forum from "./pages/Forum";
import LearnMore from "./pages/LearnMore";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";
import "./App.css";
import Anxiety from "./pages/articles/Anxiety";
import Burnout from "./pages/articles/Burnout";
import MentalHealth from "./pages/articles/MentalHealth";
import TechAddiction from "./pages/articles/TechAddiction";

function App() {

  return (
    <>

    
      <BrowserRouter>


        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/learn-more' element={<LearnMore />} />
          <Route path='/learn-more/anxiety' element={<Anxiety />} />
          <Route path='/learn-more/burnout' element={<Burnout />} />
          <Route path='/learn-more/mental-health' element={<MentalHealth />} />
          <Route path='/learn-more/tech-addiction' element={<TechAddiction />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/users' element={<Users />} />
        </Routes>


      </BrowserRouter>
   
    </>
  )
}

export default App
