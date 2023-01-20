import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import { validateProductName, validateProductAmount } from '../middlewares/validadeInputs';

const products = Router();

const productsController = new ProductController();

products.post('/', validateProductName, validateProductAmount, productsController.create);
products.get('/', productsController.getAll);

export default products;