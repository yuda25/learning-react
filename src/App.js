import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      toggleStatus: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? "ON" : "OFF"}
        <p>Kondisi sekarang {this.state.toggleStatus ? "menyala" : "mati"}</p>
      </button>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Toggle/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
