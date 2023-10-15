import express from "express";

const router = express.Router();

router.get("/test", async (request, response) => {
  response.status(200).json({ status: 'API Validada', message: 'Test route working!' });
});

export { router as TestController };