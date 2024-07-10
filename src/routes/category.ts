import { Router } from 'express';
import { getAllCategories, getCategoriesByPage } from '../controllers/categoryController';

const router = Router();

router.get('/categories', async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

router.get('/categories/page/:page', async (req, res) => {
  const { page } = req.params;
  const pageNumber = parseInt(page, 10);
  const pageSize = 6; // Adjust page size as needed

  try {
    const categories = await getCategoriesByPage(pageNumber, pageSize);
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

export default router;
