import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Forum from "./pages/Forum";
import LearnMore from "./pages/LearnMore";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";
import "./App.css";

function App() {

  return (
    <>

    
      <BrowserRouter>


        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/learn-more' element={<LearnMore />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/users' element={<Users />} />
        </Routes>


      </BrowserRouter>
   
    </>
  )
}

export default App
