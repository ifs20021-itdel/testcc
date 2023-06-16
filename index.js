import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/database.js";
import router from "./routes/index.js";
// import Users from "./models/usermodels.js"; // Untuk membuat tabel jika belum mebuat
dotenv.config();
const app = express();

// untuk info database terhubung atau tidak
try {
    await db.authenticate();
    console.log("Database terhubung...");
    // await Users.sync(); // Untuk membuat tabel jika belum mebuat
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
// Agar dapat menerima data dalam bentuk .json | middleware
app.use(express.json());
app.use(router);

// Informasi server sedang berjalan
app.listen(5000, ()=> console.log('Server berjalan di port 5000'));

