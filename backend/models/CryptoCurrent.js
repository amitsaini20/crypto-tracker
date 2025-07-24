import mongoose from 'mongoose';

const CryptoCurrentSchema = new mongoose.Schema({
  id: String,
  symbol: String,
  name: String,
  image: String,
  current_price: Number,
  market_cap: Number,
  price_change_percentage_24h: Number,
  last_updated: String
});

export default mongoose.model('CryptoCurrent', CryptoCurrentSchema);
