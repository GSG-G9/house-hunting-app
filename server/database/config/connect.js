const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  // eslint-disable-next-line no-console
  console.log(`MongoDB Connected ${conn.connection.host}`);
};

module.exports = connectDB;
