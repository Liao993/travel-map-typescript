"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PinSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        min: 3,
        max: 60,
    },
    desc: {
        type: String,
        required: true,
        min: 3,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    long: {
        type: Number,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
const PinModel = mongoose_1.default.model("Pins", PinSchema);
exports.default = PinModel;
