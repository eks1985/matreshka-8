import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ position: 'relative' }}>
        <div style={{ position: 'relative', display: 'flex', width: '100%', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', bottom: '485px', color: '#eee', fontSize: '24px', cursor: 'pointer' }}>О нас</div>
          <div style={{ position: 'absolute', bottom: '405px', color: '#eee', fontSize: '24px', cursor: 'pointer' }}>Контакты</div>
          <div style={{ position: 'absolute', bottom: '315px', color: '#eee', fontSize: '24px', cursor: 'pointer' }}>Коллектив</div>
          <div style={{ position: 'absolute', bottom: '222px', color: '#eee', fontSize: '24px', cursor: 'pointer' }}>Родителям</div>
          <div style={{ position: 'absolute', bottom: '130px', color: '#eee', fontSize: '24px', cursor: 'pointer' }}>Документы</div>
          <div style={{ position: 'absolute', bottom: '42px', color: '#eee', fontSize: '24px', cursor: 'pointer' }}>Новости</div>
        </div>
      </div>
    );
  }
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
