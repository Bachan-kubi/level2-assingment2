import { Request, Response } from 'express';
import { productServices } from './product.services';
import { productValidationSchema } from './products.validation';



const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const product = productValidationSchema.parse(data)
    const result = await productServices.createProdutIntoDB(product);
    // return result;
    res.status(200).json({
      success: true,
      msg: 'product collection created',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      msg: error.message || 'something wrong',
      error: error,
    });
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      msg: error.message || 'something wrong in fetching data',
      error: error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      msg: 'Product fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      msg: error.message || 'something wrong',
      error: error,
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data = req.body;
    const updatedInfo= productValidationSchema.parse(data)

    const updatedProduct = await productServices.updateProductFromDB(
      productId,
      updatedInfo,
    );
    res.status(200).json({
      success: true,
      msg: 'Product updated successfully!',
      data: updatedProduct,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      msg: error.message || 'something wrong',
      error: error,
    });
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      msg: error.message || 'something wrong while deleting',
      error: error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
};
