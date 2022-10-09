import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import orderRoute from './routes/order.js';
import productRoute from './routes/product.js';
import userRoute from "./routes/user.js";
import stripeRoute from './routes/stripe.js';
import authRoute from './routes/auth.js';
import cartRoute from './routes/cart.js';




const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log("ERROR: "+err);
  });

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
  res.send("Welcome To eFarming API")
})
app.use("/auth",authRoute);
app.use("/users",userRoute);
app.use("/Orders",orderRoute);
app.use("/products",productRoute);
app.use("/checkout",stripeRoute);
app.use("/cart",cartRoute);


app.listen(process.env.PORT || 4000, () => {
  console.log(`Backend server is running on port: http://localhost:${process.env.PORT}`);
});