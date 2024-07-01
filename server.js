import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import {connectDB} from "./config/db.js";
import userRouters from "./routes/userRoutes.js";
import studentRouters from "./routes/studentRoutes.js";

const app = express();

/**configure the dotenv file */
dotenv.config();
const PORT = process.env.PORT;

/**db config */
connectDB();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

/**cors */
app.use(cors());

/**api home page */
app.get("/", (req, res) => {
    res.status(200).json({
        message: "API IS RUNNING SUCCESSFULLY!!!"
    });
});

/** import the and use the sub router */
app.use('/users', userRouters);
app.use('/student', studentRouters);

/** server listen with port number */
app.listen(PORT, () => {
    console.log(`SERVER STARTED ${PORT}`.yellow.bold);
});