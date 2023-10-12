import React, { useEffect, useState } from 'react';

import { Html5QrcodeScanner } from 'html5-qrcode';

function Scanner() {
  const [scanResult, setScanResult] = useState(null)
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 259,
        height: 250
      },
      fps: 5,
    })
    scanner.render(success, error);
    function success(result) {
      scanner.clear();
      console.log(result)
      setScanResult(result)
    }
    function error(err) {
     // console.log(err)
    }

  }, [])
  return (
    <div  > 
      {
        scanResult ? 
        <div> Success: {scanResult} </div>
        :
        <div id="reader"></div>
      }

    </div>
  );
}

export default Scanner;
