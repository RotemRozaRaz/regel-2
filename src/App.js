import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/Header';
import AppCarousel from './components/Carousel';
import AppFooter from './components/Footer';
import AppProductsLinks from './components/ProductsLinks';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppCarousel />
        <AppProductsLinks/>
        <AppFooter/>
      </main>
    </div>
  );
}


export default App;