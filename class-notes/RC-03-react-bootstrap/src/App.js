import "./App.css";

import"bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./components/MyNavbar";
import Slider from "./components/slider";
import MyCard from "./components/MyCard"
import dataa from"./data"

function App() {
  return (
    <div >
 <MyNavbar/>
 <Slider/>
 <MyCard veri={dataa}/>
    </div>
  );
}

export default App;
