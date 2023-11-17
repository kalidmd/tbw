import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BurgerMenu from './components/BurgerMenu';
import Register from './components/Register';

function App() {
  
  return ( 
      <div className="App">
        <NavBar/>
        <BurgerMenu/>
        <Register/>
        <Footer/>
      </div>
  );
}

export default App;
