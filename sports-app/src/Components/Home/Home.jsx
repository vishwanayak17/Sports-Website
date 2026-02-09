import Navbar from '../Navbar/Navbar';
import Herosection from '../Herosection/Herosection';
import Game from '../Game/Game';
import WhyChooseUs from '../howitworks/howitworks';
import Register from '../register/register';
import Footer from '../footer/footer';



function Home(){
  return(
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Game/>
      <WhyChooseUs/>
      <Register/>
      <Footer/>
     
      

    </div>
  )
}

export default Home;