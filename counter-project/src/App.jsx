import { useState } from "react";

function App() {
 let [counter, setCounter] = useState(15);
  const addValue = () => {
    if(counter > 19){
      return;
    }
    else{
      setCounter(counter+1);

    }
  };
  const delValue = () => {
    if(counter < 1){
      return ;
    }
    else{
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button
      onClick={delValue}
      >Remove Value</button>
    </>
  );
}

export default App;
