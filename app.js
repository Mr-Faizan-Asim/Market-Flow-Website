import express from 'express';
import "express-async-errors";

import itemsRoute from "./routes/itemRoute.js"

const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/items", itemsRoute);

export default app;