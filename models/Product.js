import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
   
    title: { type: String, required: true,},
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    category: { type: String },
    farmName: { type: String },
    price: { type: Number, required: true },
    
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;