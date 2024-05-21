import { Request, Response } from 'express';
import { productServices } from './product.services';
import { Types } from 'mongoose';

const createProduct = async (req: Request, res: Response) => {
  try {
    const products = req.body;
    const result = await productServices.createProdutIntoDB(products);
    // return result;
    res.status(200).json({
      success: true,
      msg: 'product collection created',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      msg: error.message || 'something wrong',
      error: error,
    });
    console.log(error);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query;
    const result = await productServices.getAllProductFromDB(searchTerm);
    res.status(200).json({
      success: true,
      msg: 'Product fetched successfull!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      msg: error.message || 'something wrong in fetching data',
      error: error,
    });
    console.log(error);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    console.log(productId, 'paina ken!');
    const result = await productServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      msg: 'Product fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      msg: error.message || 'something wrong',
      error: error,
    });
    console.log(error);
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedInfo = req.body;
    console.log(productId, updatedInfo);

    const updatedProduct = await productServices.updateProductFromDB(
      productId,
      updatedInfo,
    );
    res.status(200).json({
      success: true,
      msg: 'Product updated successfully!',
      data: updatedProduct,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      msg: error.message || 'something wrong',
      error: error,
    });
    console.log(error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    const deleteProductItem =
      await productServices.deleteProductFromDB(productID);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: deleteProductItem,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      msg: error.message || 'something wrong',
      error: error,
    });
    console.log(error);
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
};
