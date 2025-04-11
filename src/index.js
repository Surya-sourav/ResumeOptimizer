// server/src/app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import resumeRoutes from './routes/resumeRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'https://resume-optimizer-one.vercel.app/'
  ]
}));
app.use(express.json());

// Routes
app.use('/api/resume', resumeRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Smart Resume Rewriter API is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
