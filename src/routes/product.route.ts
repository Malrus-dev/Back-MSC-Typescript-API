import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import { ProductName, ProductAmount } from '../middlewares/validadeInputs';

const products = Router();

const productsController = new ProductController();

products.post('/', ProductName, ProductAmount, productsController.create);
products.get('/', productsController.getAll);

export default products;