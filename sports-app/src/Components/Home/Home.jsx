// import Navbar from '../Navbar/Navbar';
import Herosection from '../Herosection/Herosection';
import Game from '../Game/Game';
import WhyChooseUs from '../howitworks/howitworks';
import Feature from "../Feature/Feature";
import Register from '../register/register';
import Footer from '../footer/footer';

function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <Herosection/>
      <Game/>
      <Feature/>
      <WhyChooseUs/>
      <Register/>
      {/* <Footer/> */}
    </>
  )
}

export default Home;
