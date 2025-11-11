import {NavBar} from '../CoustomNavBar/NavBar';
import {Footer} from '../Footer/footer';
import MyCarousel from '../Carousal/carousal';

import {WatherAPIdata} from '../FeatchingData/HomeAPI/FeatchingDataAPI'; 

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {About} from "../About/about";
import {ServiceComp} from "../ServiceComp/ServiceComp";
import {BasicComputer} from "../CategoryList/BasicComputer/BasicComputer";

import {Contect} from "../Contact/contect";
import {Help} from "../Help/help";
export default function Home() {

  const slidesData = [
  { imageUrl: 'asert/firstban.jpg', title: 'Slide 1' },
  { imageUrl: 'asert/secondban.jpg', title: 'Slide 2' },
   { imageUrl: 'asert/thirdadx.jpg', title: 'Slide 3'},
  { imageUrl: 'asert/fourpl.jpg', title: 'Slide 4'}
  // dynamically fetched or updated
];


 return(
    <div className="container-fluid">
      
      <BrowserRouter>
      
       <NavBar BrandTitle="ACI" MenuItems={["Home","Service","About","Contect","Help"]}/>  
       
       
       <Routes>
        <Route path="/" element={
          <>
            <MyCarousel items={slidesData} />
             <WatherAPIdata/>
             
          </>
          } />
        <Route path="/service" element={<ServiceComp />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/basicComputer" element={<BasicComputer />} />
        <Route path="*" element={<div>OOPS! Page not found</div>} />
      </Routes>
         <Footer />
       </BrowserRouter>

    </div>
  )
  
}