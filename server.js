const express = require("express");
const path = require("path");


const app = express();

app.use("/assets", express.static(path.resolve(__dirname, "frontend", "assets")));


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})


app.listen(process.env.PORT || 5040, () => console.log("Server running..."));