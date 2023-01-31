import './App.css';
import {useLocation, Routes, Route} from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Animals from './Pages/Animals';
import History from './Pages/History';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Footer from './Components/Footer';
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
            <Route path='*' element={ <ErrorPage/>} />
        </Routes> 
        <Footer />
      </Wrapper>     
      
    </main>
  );
}

export default App;
