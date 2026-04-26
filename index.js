const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor activo ");
});

app.post("/chat", (req, res) => {
    const mensaje = req.body.message;
    res.json({ reply: "NPC dice: " + mensaje });
});

app.listen(3000, () => {
    console.log("Servidor listo");
});
