// src/components/QRCodeGenerator.js

import React, { useState } from 'react';

import QRCode from 'react-qr-code';

function QRCodeGenerator() {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text to generate QR code"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text && <QRCode value={text} />}
    </div>
  );
}

export default QRCodeGenerator;
