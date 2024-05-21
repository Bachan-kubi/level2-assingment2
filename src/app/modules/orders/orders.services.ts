import { TOrder } from "./orders.interface"
import { Order } from "./orders.model"



const createOrder = async (payLoad: TOrder) => {
  const result = await Order.create(payLoad)
  return result
}

const getAllOrders = async (email: unknown) => {
  if (typeof email === 'string') {
    const result = await Order.find({ email })
    return result
  }
  const result = await Order.find()
  return result
}

export const orderServices = {
  createOrder,
  getAllOrders,
}