import { Schema, model, Document } from 'mongoose';

// Define an interface representing a document in MongoDB
 export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  cardCover: string;
 
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

// Define the Product schema
const ProductSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number,  },
  cardCover: { type: String, required: true },
  img1:{ type: String, required: true },
  img2:{ type: String, required: true },
  img3:{ type: String, required: true },
  img4: { type: String, required: true, },
});

// Create the Product model
const Product = model<IProduct>('Product', ProductSchema);

export default Product;
