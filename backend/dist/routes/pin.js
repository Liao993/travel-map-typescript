"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const pin_1 = require("../controllers/pin");
const pin_2 = require("../middleware/validation/pin");
exports.router = (0, express_1.Router)();
exports.router.get("/", pin_1.getAllPins);
exports.router.post("/", (0, pin_2.validationPinRequest)(pin_2.Schemas.data), pin_1.createPin);
