const macaddress = require("macaddress");
app = require("express")();
app.get("/getMac", (req, res) => {
  macaddress.one((err, mac) => {
    if (err) {
      console.error("Error al obtener la dirección MAC:", err);
      res.status(500).send("Error al obtener la dirección MAC");
      return;
    }

    res.send(`Dirección MAC: ${mac}`);
  });
});
app.listen(3001, () => {
  console.log("Servidor iniciado en http://localhost:3001");
});
