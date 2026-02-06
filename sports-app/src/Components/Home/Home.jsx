import Navbar from '../Navbar/Navbar';
import Herosection from '../Herosection/Herosection';
import Game from '../Game/Game';
import WhyChooseUs from './howitworks/howitworks';


function Home(){
  return(
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Game/>
      <WhyChooseUs/>
      

    </div>
  )
}

export default Home;