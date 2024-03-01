import { useState } from 'react';

function Counter() {
    const [count, setCounter] = useState(0);
    const addNum = () => {
        setCounter(count+1);
    }
    const subNum = () => {
        setCounter(count-1);
    }
    let imgname = 'abhsdbakdb'
  return (
    <div className='something'>
      <h1>Counter: {count}</h1>
      <button onClick={addNum}>Add +</button>
      <button onClick={subNum}>Sub -</button>
    </div>
  );
}
export default Counter;
