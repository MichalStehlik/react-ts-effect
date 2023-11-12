import { useState, useEffect } from 'react'
import ManagedInput from "./components/ManagedInput"
import PasswordInput from "./components/PasswordInput"
import EffectDemo from "./components/EffectDemo"
import './App.css'

enum Mode {
  One = 0,
  Two = 1
}

function App() {
  const [txt, setTxt] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [mode, setMode] = useState<Mode>(Mode.One);
  const length = txt.length;
  useEffect(() => {
    console.log("effect on change value or mount");
},[pass]);
  return (
    <>
      <ManagedInput value={txt} inputAction={setTxt} />
      <PasswordInput value={pass} inputAction={setPass} />
      <span>{length}</span>
      {mode == Mode.One ? <EffectDemo value={length} /> : <p>A</p>}
      <div>
        <button onClick={()=>setMode(x => x == Mode.One ? Mode.Two : Mode.One)}>Switch</button>
      </div>
    </>
  )
}

export default App