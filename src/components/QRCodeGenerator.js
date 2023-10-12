// src/components/QRCodeGenerator.js

import React, { useState } from 'react';

import QRCode from 'react-qr-code';

function QRCodeGenerator() {
    const [text, setText] = useState('Hi');

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {text && <QRCode value={text} size={250} />}
            </div>

            <input
                style={{ marginLeft: "200px", }}
                type="text"
                placeholder="Enter text to generate QR code"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />




        </div>
    );
}

export default QRCodeGenerator;
