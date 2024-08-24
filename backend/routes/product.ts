import { Router } from 'express';
import productController from '../controller/product';
import {upload,copyFileToProfileDir} from '../middlewares/uploadLocal';

const router = Router();
const fields = [
	{ name: 'cardCover', maxCount: 1 },
	{ name: 'img1', maxCount: 1 },
	{ name: 'img2', maxCount: 1 },
	{ name: 'img3', maxCount: 1 },
	{ name: 'img4', maxCount: 1 },
	
];

// Route to create a new user
router.post('/', upload.fields(fields), copyFileToProfileDir(), (req, res) => productController.createproduct(req, res));

// Route to get all users
router.get('/', (req, res) => productController.getAllproducts(req, res));
router.get('/:id', (req, res) => productController.getProductById(req, res));
router.patch('/buy/:id', (req, res) => productController.buyProduct(req, res));

export default router;
