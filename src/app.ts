import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './app/modules/products/product.router';
import { orderRouter } from './app/modules/orders/orders.router';
const app: Application = express();

app.use(express.json());
app.use(cors());

// routers
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
// app.use('/api/products', productRouter);
// app.use('/api/products', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
