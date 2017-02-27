import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ position: 'relative' }}>
        <div style={{ position: 'relative', display: 'flex', width: '100%', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', bottom: '465px', color: '#eee', fontSize: '24px', cursor: 'pointer' }}>О нас</div>
          <div style={{ position: 'absolute', bottom: '390px', color: '#eee', fontSize: '24px', cursor: 'pointer' }}>Контакты</div>
          <div style={{ position: 'absolute', bottom: '300px', color: '#eee', fontSize: '24px', cursor: 'pointer' }}>Коллектив</div>
          <div style={{ position: 'absolute', bottom: '215px', color: '#eee', fontSize: '24px', cursor: 'pointer' }}>Родителям</div>
          <div style={{ position: 'absolute', bottom: '126px', color: '#eee', fontSize: '24px', cursor: 'pointer' }}>Документы</div>
          <div style={{ position: 'absolute', bottom: '40px', color: '#eee', fontSize: '24px', cursor: 'pointer' }}>Новости</div>
        </div>
      </div>
    );
  }
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
