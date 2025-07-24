import React from 'react';

const CryptoTable = ({ data }) => {
  return (
    <table className="w-full border text-left">
      <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price (USD)</th>
          <th>24h Change (%)</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin) => (
          <tr key={coin.id}>
            <td>{coin.name}</td>
            <td>{coin.symbol.toUpperCase()}</td>
            <td>${coin.current_price}</td>
            <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
            <td>${coin.market_cap.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
