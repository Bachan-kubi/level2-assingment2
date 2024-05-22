import { Types } from 'mongoose';
import ProductModel from './product.model';
import { Tproduct } from './products.interface';

// post product into DB
const createProdutIntoDB = async (product: Tproduct) => {
  const createProduct = await ProductModel.create(product);
  const result = createProduct.save();
  return result;
};
// get all product and search fucntion too
const getAllProductFromDB = async (searchTerm?: string) => {
  if (searchTerm && typeof searchTerm === 'string') {
    const result = await ProductModel.find({ $text: { $search: searchTerm } });
    return result;
  }
  const result = await ProductModel.find();
  return result;
};

// const getAllProductFromDB = async (searchTerm: unknown) => {
//   if (typeof searchTerm === 'string') {
//     const result = ProductModel.find({ $text: { $search: searchTerm } });
//     return result;
//   }
//   const result = await ProductModel.find();
//   return result;
// };

// get single product
const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: new Types.ObjectId(id) });
  return result;
};
// updata a product
const updateProductFromDB = async (id: string, updateInfo: Tproduct) => {
  const result = await ProductModel.findByIdAndUpdate(
    { _id: id },
    { $set: updateInfo },
    { new: true },
  );
  return result;
};

// delete prodcut
const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ id });
  return result;
};


export const productServices = {
  createProdutIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
