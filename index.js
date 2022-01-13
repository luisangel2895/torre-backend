"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
// Create a express web server
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Seting a port
const port = process.env.PORT || 8000;
// Midleware to serve static pages
app.use(express_1.default.static(__dirname + "/public"));
// In case of error in redirection of express go to index.
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
// Message if all works fine
app.listen(port, () => {
    console.log(`Running the aplication in the port :${port} ...`);
});
