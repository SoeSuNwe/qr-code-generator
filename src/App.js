import QRCodeGenerator from './components/QRCodeGenerator';
import QRCodeReader from './components/QRCodeReader';
// src/App.js
import React from 'react';
function App() {
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <QRCodeGenerator />
      <h1>QR Code Reader</h1>
      <QRCodeReader />
    </div>
  );
}

export default App;
