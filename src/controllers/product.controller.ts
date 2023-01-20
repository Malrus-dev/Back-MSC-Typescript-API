import { Request, Response } from 'express';
import { StatusCode } from '../interfaces/interfaces';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) {
  }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(StatusCode.OK).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const productCreated = await this.productService.create(product);
    res.status(StatusCode.CREATED).json(productCreated);
  };
}

export default ProductController;