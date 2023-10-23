import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
         //COMPONENTS
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
         //PAGES
import Home from './pages/Home';
import Attend from './pages/Attend';
import Videos from './pages/Videos';
import Blog from './pages/Blog';
import About from './pages/About';

function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>   
            <Route path='/attend' element={<Attend/>}/>   
            <Route path='/videos' element={<Videos/>}/>   
            <Route path='/blog' element={<Blog/>}/>   
            <Route path='/about' element={<About/>}/>   
         </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
