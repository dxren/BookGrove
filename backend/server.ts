import express from "express";
import { userRouter } from "./controller/user";
import { documentRouter } from "./controller/document";
import { bookRouter } from "./controller/book";
import { logging } from "./middleware/logging";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(logging(true));

app.get("/", (_, res) => {
  res.send("hello world");
});

app.use('/user', userRouter);
app.use('/document', documentRouter);
app.use('/book', bookRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});