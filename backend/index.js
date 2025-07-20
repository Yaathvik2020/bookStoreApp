import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectToMongoDB from './db.js'; // Import the MongoDB connection function


import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'

const app = express()

dotenv.config();

// app.use(cors());
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT || 4001;
connectToMongoDB(); // Call the function to connect to MongoDB


//defining route
app.use('/api/book', bookRoute)
app.use('/api/user', userRoute);

app.get('/ok', (req, res) => {
    res.status(200).send('Backend is running fine')
})

app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`)
})