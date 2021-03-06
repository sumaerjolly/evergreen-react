import React from 'react';
import Logo from './images/Raisely.png';
import illustration from './images/illustration.svg';
import Header from './components/Header';
import TabComponent from './components/TabComponent';

function App() {
  return (
    <div className="app">
      <img src={Logo} alt="raisely Logo" />
      <Header />
      <TabComponent />
    </div>
  );
}

export default App;
