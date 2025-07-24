import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoTable from './components/CryptoTable';

function App() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/current`)
      .then(res => setCryptoData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top 10 Cryptocurrencies</h1>
      <CryptoTable data={cryptoData} />
    </div>
  );
}

export default App;
