import './App.css';
import {useLocation, Routes, Route} from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Animals from './Pages/Animals';
import History from './Pages/History';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Mammals from './Pages/FooterPages/Mammals';
import Birds from './Pages/FooterPages/Birds';
import Reptiles from './Pages/FooterPages/Reptiles';
import Amphibians from './Pages/FooterPages/Amphibians';
import Fish from './Pages/FooterPages/Fish';
import Echinoderms from './Pages/FooterPages/Echinoderms';
import Arthropods from './Pages/FooterPages/Arthropods';
import Molluscs from './Pages/FooterPages/Molluscs';
import Invertebrates from './Pages/FooterPages/Invertebrates';

import ErrorPage from './Pages/ErrorPage';


const Wrapper = ({children}) =>{
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scroll(0, 0);
  }, [location.pathname]);
  return children;
}

function App() {
  
  return (
    <main className="App">  
      <Wrapper>   
        <Navbar />
        <Routes>
            <Route path='/' exact element={ <Home/> } />
            <Route path='/zivotinje'  element={ <Animals/> } />
            <Route path='/povijest'  element={ <History/> } />
            <Route path='/kontakt'  element={ <Contact/> } />
            <Route path='/prijava'  element={ <Login/> } />
            <Route path='/zivotinje/sisavci'  element={ <Mammals/> } />
            <Route path='/zivotinje/ptice'  element={ <Birds/> } />
            <Route path='/zivotinje/gmazovi'  element={ <Reptiles/> } />
            <Route path='/zivotinje/vodozemci'  element={ <Amphibians/> } />
            <Route path='/zivotinje/ribe'  element={ <Fish/> } />
            <Route path='/zivotinje/bodljikasi'  element={ <Echinoderms/> } />
            <Route path='/zivotinje/clankonosci'  element={ <Arthropods/> } />
            <Route path='/zivotinje/mekusci'  element={ <Molluscs/> } />
            <Route path='/zivotinje/beskraljeznaci'  element={ <Invertebrates/> } />
            <Route path='*' element={ <ErrorPage/>} />
        </Routes> 
        <Footer />
      </Wrapper>     
      
    </main>
  );
}

export default App;
