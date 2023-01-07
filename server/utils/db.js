import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const db = () => {
  mongoose.set('strictQuery', true);

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });  
}

export default db;