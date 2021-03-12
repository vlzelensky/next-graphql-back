import { User, Product, Purchase } from "./models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const resolvers = {
  Query: {
    getAllUsers: () => {
      return User.find();
    },

    getToken: async (_, { email, password }) => {
      let candidate = await User.findOne({ email });
      if (candidate) {
        const isMatch = await bcrypt.compare(password, candidate.password);
        if (isMatch) {
          const token = jwt.sign(
            { id: candidate.id },
            `${process.env.jwtSecret}`,
            {
              expiresIn: "1h",
            }
          );
          return token;
        } else {
          return new Error("Invalid email/password pair");
        }
      }
      return new Error("Invalid email/password pair");
    },
    getProducts: () => {
      return Product.find();
    },
    getPurchases: () => {
      return Purchase.find();
    },
  },

  Mutation: {
    createUser: async (_, { input }) => {
      const candidate = await User.findOne({ email: input.email });
      if (candidate) {
        return new Error("This user already exists");
      } else {
        const hashedpassword = await bcrypt.hash(input.password, 12);
        const user = new User({ ...input, password: hashedpassword });
        await user.save();
        return user;
      }
    },
    createProduct: async (_, { input }) => {
      const match = await Product.findOne({ description: input.description });
      if (match) {
        return new Error("This product already exists");
      } else {
        const product = new Product({ ...input, quantity: 0 });
        await product.save();
        return product;
      }
    },
    deleteProduct: async (_, { input }) => {
      await Product.deleteOne({ _id: input.id });
      return Product.find();
    },
    createPurchase: async (_, { input }) => {
      const purchase = new Purchase({ ...input });
      await purchase.save();
      return purchase;
    },
    deletePurchase: async (_, { input }) => {
      await Purchase.deleteOne({ _id: input.id });
      return Purchase.find();
    },
  },
};
