const express = require ('express');
const app = express();

const cors = require ('cors')
const dotenv = require('dotenv').config()
const connectDB = require('./mongo')
const sellerroute = require('./routes/seller.route')
const buyerroute = require('./routes/buyer.route')
const productroute = require('./routes/product.route')


const port = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;


const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
    origin: ['*'],
    credentials: true,
}));


 app.use("/api/v1/seller", sellerroute);
app.use("/api/v1/buyer", buyerroute);
app.use("/api/v1/product",productroute)


const server = app.listen(port,() =>{
    console.log(`listening on port ${port}`)
})