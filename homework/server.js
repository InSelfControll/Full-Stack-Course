const fs = require("fs");
const app = require("express")();

app.use(require("connect-history-api-fallback")());

app.get("/*", (req, res) => {
  const paths = req.path.split("/");
  while (!fs.existsSync(__dirname + "/" + paths.join("/"))) {
    paths.shift();
  }
  res.sendFile(__dirname + "/" + paths.join("/"));
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});