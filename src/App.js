import './App.css';
import Navbar from './components/navbar';
import HomeContent from './contents/homeContent';
import About from './contents/About';
import Gallery from './contents/gallery';
import Contact from './contents/contact';

function App() {
  return (
    <div>
      <Navbar />
      <HomeContent />
      <About />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App;