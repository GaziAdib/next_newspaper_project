import mongoose from "mongoose";


const connectMongo = async () => mongoose.connect('mongodb+srv://adib521:adib5211@nextnewspaper.82l8bqz.mongodb.net/?retryWrites=true&w=majority');

export default connectMongo;

