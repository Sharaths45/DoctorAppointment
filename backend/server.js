import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/admin.route.js";
import doctorRouter from "./routes/doctor.route.js";
import userRouter from "./routes/user.route.js";

//app config

const app = express();

const port = process.env.PORT;
connectDB();
connectCloudinary();

//middlewares

app.use(express.json());
app.use(cors());

//api endpoint
app.use("/api/admin", adminRouter);
// localhost:4001/api/admin/add-doctor
app.use("/api/doctor", doctorRouter);
// localhost:4001/api/doctor/list
app.use("/api/user", userRouter);
//localhost:4001/api/user/register or login

app.get("/", (req, res) => {
  res.send("API WORKING good");
});

app.listen(port, () => {
  console.log("Server Started", port);
});
