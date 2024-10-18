const express = require("express");

const app = express();

// CORS headers => Required for cross-origin requests/ cross-server communication
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome")
})


app.listen(6696, () => {
  console.log("Server is running on port 6696");
});