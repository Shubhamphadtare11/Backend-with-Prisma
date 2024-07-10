import { Router } from 'express';
import { createUser, findUserByUsername } from '../controllers/authController';

const router = Router();

router.post('/signup', async (req, res) => {
  const { username, passwordHash } = req.body;
  try {
    const user = await createUser(username, passwordHash);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

router.post('/login', async (req, res) => {
  const { username } = req.body;
  try {
    const user = await findUserByUsername(username);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to login' });
  }
});

export default router;
