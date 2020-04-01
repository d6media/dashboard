import React, { Component } from 'react';
import './App.css';
import TopTable from './components/topTable';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome</h1>
      </header>
      <TopTable/>
    </div>
  );
}

export default App;
