"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/pin", routes_1.PinRouter);
mongoose_1.default
    .connect(process.env.MONGO_URL || "")
    .then(() => app.listen(process.env.port, () => {
    console.log(`My Application is listening to the port at ${process.env.port} and connect to db`);
}))
    .catch((error) => {
    console.log(error);
});
