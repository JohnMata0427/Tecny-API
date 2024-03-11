const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 9000;
app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Puerto escuchado en: http://localhost:${port}`);
    /* eslint-enable no-console */
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Conectado a la base de datos");
    })
    .catch((error) => {
        console.error("Error de conexión:", error);
    });
