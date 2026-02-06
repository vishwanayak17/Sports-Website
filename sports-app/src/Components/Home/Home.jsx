import Navbar from '../Navbar/Navbar';
import Herosection from '../Herosection/Herosection';
import Game from '../Game/Game';

function Home(){
  return(
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Game/>
    </div>
  )
}

export default Home;