const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // console.log(`MongoDB URI: ${process.env.MONGO_URI}`);
    const conn = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(`mongodb connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
