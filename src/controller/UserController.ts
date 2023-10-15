import express from "express";
import UserService from "../service/UserService";
import Filter from "../model/Filter";

const router = express.Router();
const userService = new UserService();

// Rota para criar um novo usuário (POST)
router.post("/new", async (req, res) => {
  const userData = req.body;
  const response = await userService.createUser(userData);
  res.json(response);
});

// Rota para consultar um usuário por ID (GET)
router.get("/:id", async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const filter = new Filter({ id: userId });
  const user = await userService.getUser(filter);
  res.json(user);
});

// Rota para atualizar um usuário por ID (POST)
router.put("/:id", async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const userData = req.body;
  const filter = new Filter({ id: userId });
  const updatedUser = await userService.updateUser(filter, userData);
  res.json(updatedUser);
});

// Rota para excluir um usuário por ID (POST)
router.delete("/:id", async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const filter = new Filter();
  filter.id = userId
  const deletedUser = await userService.deleteUser(filter);
  res.json(deletedUser);
});

export { router as UserController };
