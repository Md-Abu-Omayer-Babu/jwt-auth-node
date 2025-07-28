import express from 'express';
import protect from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/profile', protect, (req, res) => {
  res.json({ message: `Welcome ${req.user.fullName}`, user: req.user });
});

export default router;
