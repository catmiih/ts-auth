import express from "express";
import AuthService from "../service/AuthService";
import { authenticate } from "../service/AuthService";

const router = express.Router();
const authService = new AuthService();

declare module "express-session" {
  export interface SessionData {
    user: { username?: string; accessLevel?: string } | undefined; // Defina o tipo do usuário da sessão
  }
}

// Rota para fazer login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await authService.loginUser(username, password);

  if (user) {
    req.session.user = {
      username: user.username,
      accessLevel: user.account_status,
    };
    res.json({ message: "Login bem-sucedido" });
  } else {
    res.status(401).json({ message: "Credenciais inválidas" });
  }
});

// Rota para verificar a sessão atual (account_status)
router.get("/session", (req, res) => {
  if (req.session.user) {
    res.json({ account_status: req.session.user.accessLevel });
  } else {
    res.status(401).json({ message: "Não autenticado" });
  }
});

// Rota para deslogar (logout)
router.get("/logout", (req, res) => {
  if (req.session.user) {
    // Destrua a sessão
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Erro ao encerrar a sessão" });
      }
      res.json({ message: "Logout bem-sucedido" });
    });
  } else {
    res.status(401).json({ message: "Não autenticado" });
  }
});

// Rota que requer acesso de administrador
router.get('/adminRoute', authenticate(AuthService.ACCESS_LEVEL_ADMIN), (req, res) => {
    res.json({ message: 'Acesso à rota de administrador permitido' });
});

export { router as AuthController };
