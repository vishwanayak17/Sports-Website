import Navbar from '../Navbar/Navbar';
import Herosection from '../Herosection/Herosection';
import Game from '../Game/Game';
<<<<<<< HEAD
import WhyChooseUs from '../howitworks/howitworks';
import Register from '../register/register';
import Footer from '../footer/footer';




function Home(){
  return(

<>

      <Navbar/>
      <Herosection/>
      <Game/>
      <WhyChooseUs/>
      <Register/>
      <Footer/>
     
     
      
</>
=======
import Feature from '../Feature/Feature';

function Home(){
  return(
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Game/>
      <Feature/>
    </div>
>>>>>>> 7d4b1a3265468d6282d9369f3f8cbe66567a2a52
  )
}

export default Home;