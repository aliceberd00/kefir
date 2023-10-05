import React from 'react';
import logo from './logo.svg';
import './App.css';
import Colomn from "./Components/Colomn/Colomn";
import {Header} from "./Components/Header/Header";
import {Button} from "./Components/Button/Button";

function App() {
  return (
    <div className="App">
      <Header/>
      <Colomn/>
     <Button/>
    </div>
  );
}

export default App;
