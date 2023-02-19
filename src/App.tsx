import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Navbar from './components/Navbar/Navbar';



function App() {
  const [activeNavbar, setActiveNavbar] = useState(false)
  const location = useLocation()
  
  return (
    <>

      <Navbar activeNavbar={activeNavbar} />

        <SwitchTransition>
          <CSSTransition 
            key={location.pathname}
            // nodeRef={nodeRef}
            timeout={600}
            classNames={"page"}
            unmountOnExit
            >
                
            <Routes location={location}>

              <Route path='/' element={
                <div className="container">
                    <p>główna</p>
                </div>
              }/>

              <Route path='/about' element={ <>
                <div className="container container-about">
                  <p>Działa</p>
                </div>
              </> } />
              <Route path='/links' element={ <>
                <div className="container container-links">
                  <p>Działa 2</p>
                </div>
              </> } />
            </Routes>
          </CSSTransition>
        </SwitchTransition>
        
    </>
    // na podstronach: findDOMNode is deprecated in StrictMode; https://reactjs.org/link/strict-mode-find-node
  );
}

export default App;
