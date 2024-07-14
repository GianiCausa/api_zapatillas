const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 3006;
//------------------------------------------------------------
const { getZapatillas, getZapatillaById } = require("./controllers/zapatillas.controllers")

app.use(cors());

app.get("/", getZapatillas);

app.get("/:id", getZapatillaById);
//------------------------------------------------------------
app.listen(puerto, ()=>{
    console.log(`Conectado correctamente al puerto ${puerto}`);
});
