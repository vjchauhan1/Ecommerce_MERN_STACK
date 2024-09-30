import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import authRoute from './routes/authRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';

//env configure
dotenv.config();

//db config
connectDB();

const app = express();

//middleware
app.use(cors());
app.use(express.json())

//routes
app.use('/ecommerce/auth',authRoute);
app.use('/ecommerce/category',categoryRoute);
app.use("/ecommerce/product", productRoutes);

//rest api
app.get('/',(req,res)=>{
res.send("<h1>Hii </h1>")
})
const port =process.env.Port;
app.listen(port,()=>{
    console.log(`server is running on ${port} ${process.env.Port}`)
})