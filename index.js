const express = require("express");
const app = express();

app.use(express.json());

app.post("/chat", (req, res) => {
    const mensaje = req.body.message;

    const respuesta = "NPC 😎 dice: " + mensaje;

    res.json({ reply: respuesta });
});

app.get("/", (req, res) => {
    res.send("Servidor activo");
});

app.listen(3000, () => {
    console.log("Servidor listo");
});
