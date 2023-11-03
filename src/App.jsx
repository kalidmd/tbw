import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
         //COMPONENTS
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return ( 
      <div className="App">
        <NavBar/>
        {/* <Footer/> */}
      </div>
  );
}

export default App;
