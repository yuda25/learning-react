import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App(){
  const navHeading = "Navigation Bar";
  const navText = "test props";

  const clicked = () => {
    return alert("button sudah u pencet");
  }

  const paragraf = () => {
    return (
      <div>
        <i>PT.KYM</i>
        <marquee>hai hai hai</marquee>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} navHeading={navHeading}/>
        <img src={logo} className="App-logo" alt="logo" />
        <Button clicked={clicked}/>
        <Footer paragraf={paragraf}/>
      </header>
    </div>
  );
}

export default App;