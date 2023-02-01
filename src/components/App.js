import React from 'react';
import '../assets/css/App.css';
import '../assets/css/colors.css';
import Header from './Header';
import Footer from './Footer';
import ContentWrapper from './ContentWrapper';

function App() {
  return (
    <div className="App">

        <Header />

        <ContentWrapper />
        
        <Footer />
      
    </div>
  );
}

export default App;
