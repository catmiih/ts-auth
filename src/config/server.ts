import express from 'express';

const app = express();
var cors = require('cors')
app.use(cors())

import {indexRoute} from '../controller/indexController';

app.use('/',indexRoute);

const PORT = 3333;
const HOST = 'localhost';

app.listen(PORT, () => {
  console.log(`HTTP Server Running! http://${HOST}:${PORT}`);
});