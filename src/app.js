import express from "express";

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O senhor dos anéis"
  },
  {
    id: 2,
    titulo: "O hobbit"
  },
]

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
})

app.get("/livros", (req, res) => {
  res.status(200).json(livros)
})

app.get("/livros/:id", (req, res) => {
  const index = req.params.id;
  res.status(200).json(livros)
})

export default app;
