import express from "express";
import { userControllerRoutes } from "../controller/UserController";

export default function setupRoutes(app: express.Application) {

    // Monte as rotas dos controladores aqui
    app.use('/user', userControllerRoutes);

    // Você pode adicionar mais controladores aqui conforme necessário
}
