import React from 'react'; 
import './App.scss';
import RoutesList from './RouteList';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
        <RoutesList/>
      <Footer />
    </div>
  );
}

export default App;
