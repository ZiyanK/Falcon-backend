const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
var cors = require('cors');
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRoute = require('./routes/userRoutes');

app.use('/user',userRoute);

const port = process.env.PORT
app.listen(port,()=>{
  console.log('Server is up on port ',port)
})