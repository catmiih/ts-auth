import express from "express";
import { UserController } from "../controller/UserController";
import { TestController } from "../controller/TestController";

export default function setupRoutes(app: express.Application) {

    // All routes of project
    app.use('/', TestController);
    app.use('/user', UserController);
}
