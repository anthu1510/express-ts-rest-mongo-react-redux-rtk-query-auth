import express, { Express } from "express";

const app: Express = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


export default app;