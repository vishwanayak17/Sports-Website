import Navbar from '../Navbar/Navbar';
import Herosection from '../Herosection/Herosection';
import Game from '../Game/Game';
import Feature from '../Feature/Feature';

function Home(){
  return(
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Game/>
      <Feature/>
    </div>
  )
}

export default Home;