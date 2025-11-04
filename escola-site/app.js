const express = require("express");
const path = require("path");
const app = express();

// Configurações básicas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Dados simulados (exemplo)
const atividades = [
  { titulo: "Feira de Ciências", descricao: "Alunos do 8º ano apresentarão experimentos sobre energia renovável.", data: "10/11/2025" },
  { titulo: "Campeonato de Matemática", descricao: "Desafio entre turmas com premiações.", data: "15/11/2025" },
  { titulo: "Semana da Leitura", descricao: "Atividades literárias e apresentações teatrais.", data: "20/11/2025" }
];

// Rotas
app.get("/", (req, res) => res.render("index"));
app.get("/atividades", (req, res) => res.render("atividades", { atividades }));

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
