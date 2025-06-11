const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    return await Promise.resolve().then(() =>
      mongoose.connect(process.env.MONGODB_URI)
    );
  } catch (err) {
    return await Promise.reject(err);
  }
};

module.exports = connectDB;
