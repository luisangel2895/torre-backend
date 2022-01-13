require("dotenv").config();

// Create a express web server
import express from "express";
const app: any = express();

// Seting a port
const port: string | number = process.env.PORT || 8000;

// Midleware to serve static pages
app.use(express.static(__dirname + "/public"));

// Error handling in routes
app.get("*", (req: any, res: any) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Message if all works fine
app.listen(port, (): void => {
  console.log(`Running the aplication in the port :${port} ...`);
});
