import React from 'react';
import ReactDOM from 'react-dom/client';
import PersonalCard from './components/PersonalCard';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonalCard firstName="Lucas" lastName="Duarte" age={29} hairColor="Negro"/>
    <PersonalCard firstName="Guillermo" lastName="Bernal" age={26} hairColor="Negro"/>
    <PersonalCard firstName="Isaac" lastName="Vera" age={23} hairColor="Rubio"/>
    <PersonalCard firstName="Marcos" lastName="Saldivar" age={31} hairColor="Pelirrojo"/>
  </React.StrictMode>
);

