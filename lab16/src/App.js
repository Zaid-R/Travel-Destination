import Home from './components/home/Home.js'
import { Routes, Route } from "react-router-dom";
import './App.css';
import TourDetails from './components/TourDetails/TourDetails.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js'
function App() {

  return (<>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/city/:id" element={<TourDetails />} />
    </Routes>
    <Footer />
  </>);
}

export default App;
