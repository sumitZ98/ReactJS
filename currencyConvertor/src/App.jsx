import { useState } from "react";

function App(){
    let [val, setVal] = useState(0);
    return(
        <>
            <h1 className="text-3xl bg-red-400 text-center px-5 py-5 flex justify-center items-center">Currency Convertor</h1>
        </>
    );
}
export default App;