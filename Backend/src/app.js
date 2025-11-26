const express = require("express");
const cors = require("cors");

const app = express();

// Allow all origins
app.use(cors());

app.use(express.json());

const apiRoutes = require("./routes/v1/aqi.routes");
app.use("/aqi/v1", apiRoutes);

const errorMiddleware = require("./middleware/error.middleware");
app.use(errorMiddleware);

module.exports = app;
