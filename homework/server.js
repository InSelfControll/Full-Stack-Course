const app = require("express")();

app.use(require("body-parser")());

app.post("/api/add-to-db", (req, res) => {
  const { name } = req.body;
  console.log(name);
})