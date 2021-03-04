import { User } from "./models/index.js";

export const resolvers = {
  Query: {
    getAllUsers: () => {
      return User.find();
    },

    getUser: (_, { email }) => {
      return User.findOne({ email });
    },
  },

  Mutation: {
    createUser: async (_, { input }) => {
      const user = new User({ ...input });
      await user.save();
      return user;
    },
  },
};
