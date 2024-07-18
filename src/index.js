import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import mongoose from "mongoose";

import menuRoutes from './routes/menu.js'
import tableRoutes from './routes/table.js'
dotenv.config()

const app = express();

const port = process.env.PORT || 8000

// connect to database 
mongoose.set("strictQuery",false)
const connectDB = async ()=>{
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION)
    console.log("connect to database successful");
  } catch (error) {
    console.log("connect to databse failed");
  }
}

// middleware
app.use(cookieParser());
app.use(cors({origin:true}));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// routes
app.use("/api/v1/menu", menuRoutes);
app.use("/api/v1/reservation", tableRoutes);

app.listen(port, (req, res) => {
  connectDB()
  console.log("connect server successfully");
});
