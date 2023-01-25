import express from 'express';
import orders from './routes/order.route';
import products from './routes/product.route';
import users from './routes/user.route';

const app = express();

app.use(express.json());
app.use('/products', products);
app.use('/', users);
app.use('/orders', orders);

export default app;
