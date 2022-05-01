const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const route = require("./routes");

/* Initialize app */
const app = express();

/* Template Engine */
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("views", path.join(__dirname, "./resources/views"));
app.set("view engine", "hbs");

/* ----- Middleware ---- */
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* -------- Routes -------- */
route(app);

/* ------- Listening ------ */
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
