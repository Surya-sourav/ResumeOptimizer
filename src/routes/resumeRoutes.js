// server/src/routes/resumeRoutes.js
import express from 'express';
import { rewriteResumeBullet } from '../controllers/resumeController.js';

const router = express.Router();

router.post('/rewrite', rewriteResumeBullet);

export default router;