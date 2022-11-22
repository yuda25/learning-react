import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <Footer />
      </header>
    </div>
  );
}

export default App;