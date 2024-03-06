import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [chars, setChars] = useState(false);
  const [pass, setPass] = useState("");
  //use ref hook
  const passRef = useRef(null);
  const passGen = useCallback(() => {   //usecallback(()=> {},[])
    let password = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
    if (numbers) {
      str += "0123456789"; //ZGPCcw3ztZ
    }
    if (chars) {
      str += "!@#$%^&*()+_}{>?";
    }

    for (let i = 1; i <= length; i++) {
      let characters = Math.floor(Math.random() * str.length + 1);
      console.log(characters);
      password += str.charAt(characters);
      setPass(password);
    }
  }, [length, numbers, chars, setPass]);

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect(() => {
    passGen();
  }, [length, numbers, chars, passGen]);
  return (
    <>
      <div className="container">
        <div className="heading">Password Generator</div>
        <div className="inp">
          <input
            type="text"
            value={pass}
            className="pass"
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button onClick={copyPassword}>Copy here</button>
        </div>
        <div className="range">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="check">
          <input
            type="checkbox"
            defaultChecked={numbers}
            id="numberInput"
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
          <input
            type="checkbox"
            defaultChecked={chars}
            id="charsInput"
            onChange={() => {
              setChars((prev) => !prev);
            }}
          />
          <label htmlFor="charsInput">characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
