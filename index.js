const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("OK");
});

app.post("/chat", (req, res) => {
    const msg = req.body.message || "";

    let respuesta = "No entendí ";

    if (msg.toLowerCase().includes("hola")) {
        respuesta = "Hola humano ";
    } else if (msg.toLowerCase().includes("adios")) {
        respuesta = "Nos vemos ";
    } else {
        respuesta = "Dijiste: " + msg;
    }

    res.json({ reply: respuesta });
});

app.listen(5000, "0.0.0.0", () => {
    console.log("Brain listo");
});
