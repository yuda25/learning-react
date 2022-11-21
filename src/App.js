import logo from './logo.svg';
import './App.css';

function Biodata(props) {
  return <span>umur lu {props.age}</span>
}

function Greating(props) {
  return <h1>Hello {props.name} - <Biodata age={props.age}/></h1>
}



function App(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greating name="Yuda" age="25"/>
      </header>
    </div>
  );
}

export default App;
