import React, {useState, useEffect} from 'react';
import './App.css';

function App(){

const [PacarSaya, setPacarSaya] = useState(0);
const [NamaPacar, setNamaPacar] = useState("");

useEffect(() => {
  if(PacarSaya > 1) {
    setNamaPacar("Yanto Supriyadi(BOYO)");
  } else {
    setNamaPacar("Yanti(SETIA)")
  }
},[PacarSaya])

  return (
    <div>
        <h5>Nama pacar : {NamaPacar}</h5>
        <h1>Saya punya {PacarSaya} pacar</h1>
        <button onClick={() => setPacarSaya((pref) => pref + 1)}>Tambah Pacar</button>
        <button onClick={() => setPacarSaya((pref) => pref - 1)}>Putuskan Pacar</button>
    </div>
  );
}

export default App;