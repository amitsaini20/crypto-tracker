import express from 'express';
import CryptoCurrent from '../models/CryptoCurrent.js';

const router = express.Router();

router.get('/current', async (req, res) => {
  const data = await CryptoCurrent.find();
  res.json(data);
});

export default router;
