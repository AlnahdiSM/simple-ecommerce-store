import { Request, Response } from 'express';
import productService from '../service/Product';

class productController {
  

  public async createproduct(req: Request, res: Response): Promise<void> {
    try {
      const cardCover = req.cardCover;
      const img1 = req.img1;
      const img2 = req.img2;
      const img3 = req.img3;
      const img4 = req.img4;
    
      const product = await productService.createproduct(req.body, cardCover,img1,img2, img3, img4);
      res.status(201).send(product);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public async getAllproducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await productService.getAllproducts();
      res.send(products);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  public async getProductById(req: Request, res: Response): Promise<void> {
    try {
        const id=req.params.id
      const products = await productService.getProductById(id);
      res.send(products);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  public async buyProduct(req: Request, res: Response): Promise<void> {
    try {
        const id=req.params.id
      const products = await productService.buyProduct(id);
      res.send(products);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  
}

export default new productController();
