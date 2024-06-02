const express = require("express");
const cors = require("cors");
const app = express();
const authrouter = require("./router/auth-router");
const uploadrouter = require("./router/upload-router");
const bannerrouter = require("./router/banner-router");
const dbconnect = require("./dbconnect");

app.use(cors());

app.use('/api/auth', authrouter);
app.use('/api/banner', bannerrouter);
app.use('/api/upload', uploadrouter);

dbconnect().then(() => {
app.listen(8000, () => {
  console.log('Example app listening at http://localhost:3000');
});
});