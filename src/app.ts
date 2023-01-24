import express from 'express';
import products from './routes/product.route';
import users from './routes/user.route';

const app = express();

app.use(express.json());
app.use('/products', products);
app.use('/users', users);

export default app;
