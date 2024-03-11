import { useState } from "react";
import Temp from "./Temp";
function App() {
let [cel,setCel] = useState('');
let [far, setFar] = useState('');
let changeHandler = (e) => {
  let celcius = e.target.value;
  setCel(celcius);
  setFar(CtoF(celcius));
}

let CtoF = (celcius) => {
  if(!celcius) return '';
  return (celcius * 9 / 5) + 32;
}
  return (
   <>
    <Temp type="number" value={cel} handleChange={changeHandler} dets='Celcius'></Temp>
    <Temp type = "text" value={far} dets="Farenheit"></Temp>
   </>
  )
}

export default App
