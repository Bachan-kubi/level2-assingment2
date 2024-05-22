import { Schema, model, Model } from 'mongoose';

// Define the Variant type
export type TVariant = {
  type: {type: string, required: true }, 
  value: {type: string, required: true } 
}

// Define the Inventory type
export type TInventory = {
  quantity: {type: number, required: true }, 
  inStock: {type: boolean, required: true }  
}

// Define the Product type
export type Tproduct = {
  name: {type: string, required: true }, 
  description: {type: string, required: true }, 
  price: {type: number, required: true } 
  category: {type: string, required: true } 
  tags: {type: string, required: true } 
  variants: TVariant[];
  inventory: TInventory;
}

// Define the Variant schema
const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

// Define the Inventory schema
const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true},
  inStock: { type: Boolean, required: true },
});

// Define the Product schema
const productSchema = new Schema<Tproduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});
// productSchema.index({ name: 'text', description: 'text', category: 'text', tags: 'text' });
// Create the Product model
const ProductModel: Model<Tproduct> = model<Tproduct>('Product', productSchema);

export default ProductModel;





// import { Schema, model, connect } from 'mongoose';
// import { TInventory, TVariant, Tproduct } from './products.interface';

// // Define the Variant schema
// const variantSchema = new Schema<TVariant>({
//   type: { type: String, required: true },
//   value: { type: String, required: true },
// });

// // Define the Inventory schema
// const inventorySchema = new Schema<TInventory>({
//   quantity: { type: Number, required: true },
//   inStock: { type: Boolean, required: true },
// });

// // Define the Product schema
// const productSchema = new Schema<Tproduct>({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { type: String, required: true },
//   tags: { type: [String], required: true },
//   variants: { type: [variantSchema], required: true },
//   inventory: { type: inventorySchema, required: true },
// });

// // Create the Product model
// const ProductModel = model<Tproduct>('Product', productSchema);

// export default ProductModel;
