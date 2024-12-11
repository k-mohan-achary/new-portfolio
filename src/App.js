import './App.scss';
import { Routes,Route, useLocation  } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; 

import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Navbar from './components/navBar';
import particles from './utils.js/particles';

function App() {

  const location = useLocation();
  console.log(location);

  const renderParticleJsInHomePage = location.pathname === "/";

  const handleInit = async(main)=>{
    await loadFull(main)
  }

  return (
    <div className="App">
        {/* {* Paticle  *} */}
        {renderParticleJsInHomePage && (
           <Particles id="particles" options={particles} init={handleInit} /> 

        )}

        {/* {* Navbar  *} */}
        <Navbar/>


        {/* {* Main Page Content / Page Header  *} */}
 
        <div className='App__main-page-content'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/resume' element={<Resume/>} />
         
        </Routes>
          </div>    
 
 
 
    </div>
  );
}

export default App;
