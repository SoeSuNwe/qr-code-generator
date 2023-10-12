import QRCodeGenerator from './components/QRCodeGenerator';
import React  from 'react';
import Scanner from './components/Scanner';

function App() {
   
  return (
    <div className="App">
       <h1>QR Code Generator</h1>
      <QRCodeGenerator />
      <h1>QR Code Reader</h1>
      <Scanner/>

    </div>
  );
}

export default App;
