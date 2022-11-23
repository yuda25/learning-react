import React, {useState} from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';

function App(){

  const [Navbar, setNavbar] = useState("");

  const changeNavbar = () => {
    setNavbar("My Contact");
  }

  return (
    <div>
        <NavigationBar navValue={Navbar}/>
        <h1>INI HOMEAGE</h1>
        <button onClick={() => changeNavbar()}>Ubah Navigasi</button>
    </div>
  );
}

export default App;