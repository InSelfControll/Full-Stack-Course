const app = require("express")();

app.use(require("connect-history-api-fallback")());

app.get("/*", (req, res) => {
  res.sendFile(__dirname + req.path);
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});