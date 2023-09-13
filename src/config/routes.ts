import express from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express.Router();

app.use(express.json());

export default app;

export interface routes {
    //Armazenar todas as controllers aqui
}