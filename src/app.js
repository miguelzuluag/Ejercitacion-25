const express = require ('express');
const path = require("path");

const mainRoutes = require("./routes/main");

const app = express ();

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));

app.use("/", mainRoutes);


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log (`Server started on http://localhost:${port}`);
});