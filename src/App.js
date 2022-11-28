import './App.css';
import ConfigRoutes from './configRoutes';

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='landingPage' element={< LandingPage/>}/>
          <Route path='/' element={< Navigate to={'landingPage'}/>}/>
          <Route path='manageUsers' element={< ManageUsers/>}/>
        </Routes>
      </BrowserRouter> */}
      <ConfigRoutes />
    </div>
  )
}

export default App;