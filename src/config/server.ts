import express, { Request, Response } from 'express';
import setupRoutes from './routes';
import session from 'express-session';

const app = express();
var cors = require('cors')
const dotenv = require('dotenv');
const apiKey = process.env.API_KEY;

app.use(cors())
dotenv.config();

app.use(
  session({
    secret: 'auth',
    resave: false,
    saveUninitialized: true,
  })
);

function authenticateAPIKey(req: Request, res: Response, next: Function) {
  const userApiKey = req.headers['api-key'];

  if (userApiKey === apiKey) {
    console.log('\x1b[32m ✔ Verified -- API Key:', apiKey, '\x1b[0m');
    next();
  } else {
    console.log('\x1b[31m ✘ Error (403) -- Invalid API Key \x1b[0m');
    res.status(403).json({ error: 'API key inválida' });
  }
}

app.use(authenticateAPIKey);

setupRoutes(app);

const PORT = 3333;
const HOST = 'localhost';

const logo = `\x1b[5m \x1b[35m 
██╗  ██╗██╗████████╗███████╗██╗   ██╗██████╗  █████╗ 
██║ ██╔╝██║╚══██╔══╝██╔════╝██║   ██║██╔══██╗██╔══██╗
█████╔╝ ██║   ██║   ███████╗██║   ██║██████╔╝███████║
██╔═██╗ ██║   ██║   ╚════██║██║   ██║██╔══██╗██╔══██║
██║  ██╗██║   ██║   ███████║╚██████╔╝██║  ██║██║  ██║
╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝\x1b[0m
              API version: 1.0.0
`;

app.listen(PORT, () => {
  
  console.log(logo)
  console.log(`\x1b[33m Access API at: http://${HOST}:${PORT} \x1b[0m`)
  console.log(`\x1b[33m Access pgAdmin at: http://${HOST}:5050 \x1b[0m`)
});
