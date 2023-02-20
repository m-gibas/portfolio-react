import { Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Links from './components/Links/Links';



function App() {
  const location = useLocation()
  
  return (
    <>
      <Navbar />

      <SwitchTransition>
        <CSSTransition 
          key={location.pathname}
          timeout={600}
          classNames={"page"}
          unmountOnExit
          >
          <Routes location={location}>
            <Route path='/' element={ <Home /> }/>
            <Route path='/about' element={ <About /> } />
            <Route path='/links' element={ <Links /> } />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </>
    // na podstronach: findDOMNode is deprecated in StrictMode; https://reactjs.org/link/strict-mode-find-node
  );
}

export default App;
