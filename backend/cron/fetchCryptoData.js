import cron from 'node-cron';
import axios from 'axios';
import CryptoCurrent from '../models/CryptoCurrent.js';
import CryptoHistory from '../models/CryptoHistory.js';

const fetchData = async () => {
  try {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1
      }
    });
    await CryptoCurrent.deleteMany();
    await CryptoCurrent.insertMany(res.data);
    await CryptoHistory.create({ data: res.data });

    console.log('Crypto data updated');
  } catch (err) {
    console.error('Error fetching crypto data:', err);
  }
};

// Run every hour
cron.schedule('0 * * * *', fetchData);
fetchData(); // run once at start
