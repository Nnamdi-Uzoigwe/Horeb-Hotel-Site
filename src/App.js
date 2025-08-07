import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Receipt from "./pages/Receipt";
import RoomDetail from "./pages/RoomDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
    <Navbar />
      <Routes>

         <Route path='/'  element ={<Home/> }/>
         {/* <Route path='/rooms'  element ={<Rooms/> }/> */}
         <Route path='/about' element = {<About/>} />
         <Route path='/contact' element = {<Contact/>} />
         {/* <Route path='/explore' element = {<Explore/>} /> */}
         <Route path='rooms/:id' element = {<RoomDetail/>} />
         <Route path='/payment' element = {<Payment/>} />
         <Route path='/receipt' element = {<Receipt/>} />

         

       
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
