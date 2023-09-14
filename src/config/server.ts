import express from 'express';
const app = express();

import setupRoutes from './routes';

var cors = require('cors')
app.use(cors())

setupRoutes(app);

const PORT = 3333;
const HOST = 'localhost';

app.listen(PORT, () => {
  console.log(`HTTP Server Running! http://${HOST}:${PORT}`);
});
