"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPin = exports.getAllPins = void 0;
const pinModel_1 = __importDefault(require("../models/pinModel"));
function getAllPins(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const Pins = yield pinModel_1.default.find();
            res.status(200).json(Pins);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "Internal server error, contact API administrator",
            });
        }
    });
}
exports.getAllPins = getAllPins;
function createPin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPin = req.body;
        try {
            const savedpin = yield pinModel_1.default.create(newPin);
            res.status(200).json(savedpin);
        }
        catch (error) {
            console.log("DataBase Error", error);
            res.status(500).json(error);
        }
    });
}
exports.createPin = createPin;
