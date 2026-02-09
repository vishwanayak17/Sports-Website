import Navbar from '../Navbar/Navbar';
import Herosection from '../Herosection/Herosection';
import Game from '../Game/Game';
import WhyChooseUs from '../howitworks/howitworks';
import Register from '../register/register';
import Footer from '../footer/footer';
import Features from "../Feature/Feature"



function Home(){
  return(
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Game/>
      <Features/>
      <WhyChooseUs/>
      <Register/>
      <Footer/>
     
      

    </div>
  )
}

export default Home;