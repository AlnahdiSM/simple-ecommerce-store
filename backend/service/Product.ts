import Product , {IProduct} from '../model/product';

class ProductService {
  // Method to create a new product
  public async createproduct(productData: any,cardCover:any,img1:any,img2:any, img3:any, img4:any): Promise<IProduct> {
    const product = new Product({...productData, cardCover: cardCover, img1: img1, img2: img2, img3: img3, img4: img4,});
    return await product.save();
  }

  // Method to get all products
  public async getAllproducts(): Promise<IProduct[]> {
    return await Product.find({});
  }
  public async getProductById(id: string): Promise<IProduct | null> {
    return await Product.findById(id);
  }
  public async buyProduct(id: string): Promise<IProduct | null> {
    return await Product.findByIdAndUpdate(
      id,
      { status: 1 },
      { new: true }  // This option returns the updated document
    ).exec();
  }
}  


export default new ProductService();
