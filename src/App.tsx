import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'


function App() {
  const location = useLocation()
  
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <div className="navbar">
              <Link to="/about" className="mainpage-link">About</Link>
              <br />
              <Link to="/links" className="mainpage-link">Links</Link>
            </div>
            <div className="container">
                <p>główna</p>
            </div>
          </>
        }/>
      </Routes>

        <SwitchTransition>
          <CSSTransition 
            key={location.pathname}
            // nodeRef={nodeRef}
            timeout={500}
            classNames={"page"}
            unmountOnExit
            >

          <Routes location={location}>
            <Route path='/about' element={ <>
              <div className="container">
              <Link to="/" className="mainpage-link">Main</Link>
                <p>Działa</p>
              </div>
            </> } />
            <Route path='/links' element={ <>
              <div className="container blue">
              <Link to="/" className="mainpage-link">Main</Link>
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
