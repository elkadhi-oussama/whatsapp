console.clear();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
//ficher env
import dotenv from "dotenv";
// compoenet de database
import Connection from "./database/db.js";
//import les routes
import Routes from "./routes/Route.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);
Connection();
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is runnnig on ${PORT}`);
});
