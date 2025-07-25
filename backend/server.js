import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cryptoRoutes from './routes/cryptoRoutes.js';
import './cron/fetchCryptoData.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/crypto', cryptoRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error(err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));    
