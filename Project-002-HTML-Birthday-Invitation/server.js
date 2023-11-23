import express from "express";

const app = express();
app.use(express.static("public"));

app.listen(1992, () => {
  console.log("Server Listen on Port 1992");
});
