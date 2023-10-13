import express from "express";

const router = express.Router();

router.get("/test", async (request, response) => {
  console.log("API Is Working!");
  response.send("Test route working!");
});

export { router as TestController };