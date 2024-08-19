import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (_, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
