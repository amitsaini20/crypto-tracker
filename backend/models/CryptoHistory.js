import mongoose from 'mongoose';

const CryptoHistorySchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  data: Array
});

export default mongoose.model('CryptoHistory', CryptoHistorySchema);
