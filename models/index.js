import mongoose from "mongoose";
export const User = mongoose.model("User", {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

export const Product = mongoose.model("Product", {
  description: String,
  weight: String,
  price: String,
  quantity: Number,
});

export const Purchase = mongoose.model("Purchase", {
  title: String,
  date: String,
  goods: Array,
});
