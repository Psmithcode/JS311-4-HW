const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4001;

app.use(express.static("public"));

let contactRoutes = require("./routes/contactRoutes");
// let vehicleRoutes = require("./routes/vehicleRoutes");
// let commentsRoutes = require("./routes/commentsRoutes");
// let productsRoutes = require("./routes/productsRoutes");

app.use(contactRoutes);
// app.use(vehicleRoutes);
// app.use(commentsRoutes);
// app.use(productsRoutes);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
