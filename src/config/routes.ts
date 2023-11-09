import express from "express";
import { UserController } from "../controller/UserController";
import { TestController } from "../controller/TestController";
import { AuthController } from "../controller/AuthController";

const bodyParser = require('body-parser');

export default function setupRoutes(app: express.Application) {
    app.use(bodyParser.json());

    // All routes of project
    app.use('/', TestController);
    app.use('/user', UserController);
    app.use('/auth', AuthController);
}
