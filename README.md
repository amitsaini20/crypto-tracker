## Crypto Tracker

Track top 10 cryptocurrencies in real-time with backend automation using cron jobs and MongoDB.

## Live URLs

Frontend URL: https://crypto-tracker-pcha.vercel.app/
Backend API Base URL: https://crypto-tracker-1-2ny9.onrender.com/api/crypto/current

## Tech Stack

Frontend:
- React
- Axios
- React-dom

Backend:
- Node.js + Express
- Mongoose
- MongoDB Atlas
- Node-cron



## Folder Structure
```

crypto-tracker/
├── backend/
|   ├── cron/
|   |    └── fetchCryptoData.js
│   ├── models/
|   |    ├── CryptoCurrent.js
│   │    └── CryptoHistory.js
│   ├── routes/
|   |    └── cryptoRoutes.js
│   ├── server.js
|   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
|   |   |       └── CryptoTable.js
│   │   ├── App.js
|   |   └── index.js
│   ├── package.json
|   └──  README.md
└── screenshots/
    ├── db-saving.png    (db-sample)
    ├── db-saving2.png    (cron-job)
    └── frontend-ss.png
```

## Setup Instructions

### Backend

1. Rename `.env.example` to `.env` and set MongoDB URI.
2. Run the backend:
```bash
cd backend
npm init -y
node server.js
```
### Frontend
Add this to frontend/.env:
```
REACT_APP_API_URL=https://your-backend.onrender.com/api/crypto
```
Run the frontend:
```
cd frontend
npx create-react-app crypto-tracker
npm start
```

## Cron Job Working

- Runs every hour (or 5 mins — as per setup)
- Uses `node-cron` to fetch top 10 coins from CoinGecko API
- Deletes previous records from `CryptoCurrent` collection
- Inserts new records
- Also saves snapshot to `CryptoHistory` for time-series data

Code Example:
```js
cron.schedule('0 * * * *', fetchData);
```
