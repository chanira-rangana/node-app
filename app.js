const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "get /" });
});

app.listen(PORT, () =>
  console.log("server started and running on port : " + PORT)
);
