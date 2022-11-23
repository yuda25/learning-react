import Logo from './logo.svg';
import './App.css';
import {useRef} from 'react';

function App() {
  const linkRef = useRef(null)

  const goTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <div onClick={() => goTo(linkRef.current)}>
        <img src={Logo} className='App-logo' alt='logo' />
        </div>
        <p>
          Edit <code>src/App.js</code> and save reload.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum eros tellus. Aliquam in lacinia velit, ac finibus ipsum. Fusce convallis consectetur augue et placerat. Duis mattis lobortis laoreet. Suspendisse placerat ante quis iaculis maximus. Curabitur tortor tellus, dapibus quis egestas et, feugiat quis ligula. Cras leo justo, placerat et risus in, aliquet ultrices urna. Integer egestas felis in eros tincidunt, ac venenatis neque ornare. Duis in orci nec libero eleifend volutpat. Suspendisse potenti. Proin consequat eros diam, in elementum justo tristique non. In aliquet, odio a auctor venenatis, massa nisi dignissim ipsum, ac cursus arcu nulla sit amet sem. Suspendisse quis dui turpis. Praesent maximus eros mi, sit amet volutpat diam pellentesque tristique. Duis finibus elit at efficitur egestas.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum eros tellus. Aliquam in lacinia velit, ac finibus ipsum. Fusce convallis consectetur augue et placerat. Duis mattis lobortis laoreet. Suspendisse placerat ante quis iaculis maximus. Curabitur tortor tellus, dapibus quis egestas et, feugiat quis ligula. Cras leo justo, placerat et risus in, aliquet ultrices urna. Integer egestas felis in eros tincidunt, ac venenatis neque ornare. Duis in orci nec libero eleifend volutpat. Suspendisse potenti. Proin consequat eros diam, in elementum justo tristique non. In aliquet, odio a auctor venenatis, massa nisi dignissim ipsum, ac cursus arcu nulla sit amet sem. Suspendisse quis dui turpis. Praesent maximus eros mi, sit amet volutpat diam pellentesque tristique. Duis finibus elit at efficitur egestas.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum eros tellus. Aliquam in lacinia velit, ac finibus ipsum. Fusce convallis consectetur augue et placerat. Duis mattis lobortis laoreet. Suspendisse placerat ante quis iaculis maximus. Curabitur tortor tellus, dapibus quis egestas et, feugiat quis ligula. Cras leo justo, placerat et risus in, aliquet ultrices urna. Integer egestas felis in eros tincidunt, ac venenatis neque ornare. Duis in orci nec libero eleifend volutpat. Suspendisse potenti. Proin consequat eros diam, in elementum justo tristique non. In aliquet, odio a auctor venenatis, massa nisi dignissim ipsum, ac cursus arcu nulla sit amet sem. Suspendisse quis dui turpis. Praesent maximus eros mi, sit amet volutpat diam pellentesque tristique. Duis finibus elit at efficitur egestas.</p>

        <a
          className="App-link"
          href='https://reactjs.org'
          target="_blank"
          rel="nooper noreferrer"
          ref={linkRef}
          >
          Learn react
        </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum eros tellus. Aliquam in lacinia velit, ac finibus ipsum. Fusce convallis consectetur augue et placerat. Duis mattis lobortis laoreet. Suspendisse placerat ante quis iaculis maximus. Curabitur tortor tellus, dapibus quis egestas et, feugiat quis ligula. Cras leo justo, placerat et risus in, aliquet ultrices urna. Integer egestas felis in eros tincidunt, ac venenatis neque ornare. Duis in orci nec libero eleifend volutpat. Suspendisse potenti. Proin consequat eros diam, in elementum justo tristique non. In aliquet, odio a auctor venenatis, massa nisi dignissim ipsum, ac cursus arcu nulla sit amet sem. Suspendisse quis dui turpis. Praesent maximus eros mi, sit amet volutpat diam pellentesque tristique. Duis finibus elit at efficitur egestas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum eros tellus. Aliquam in lacinia velit, ac finibus ipsum. Fusce convallis consectetur augue et placerat. Duis mattis lobortis laoreet. Suspendisse placerat ante quis iaculis maximus. Curabitur tortor tellus, dapibus quis egestas et, feugiat quis ligula. Cras leo justo, placerat et risus in, aliquet ultrices urna. Integer egestas felis in eros tincidunt, ac venenatis neque ornare. Duis in orci nec libero eleifend volutpat. Suspendisse potenti. Proin consequat eros diam, in elementum justo tristique non. In aliquet, odio a auctor venenatis, massa nisi dignissim ipsum, ac cursus arcu nulla sit amet sem. Suspendisse quis dui turpis. Praesent maximus eros mi, sit amet volutpat diam pellentesque tristique. Duis finibus elit at efficitur egestas.</p>
      </header>
    </div>
  )
}

export default App;