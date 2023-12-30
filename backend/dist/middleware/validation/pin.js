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
exports.Schemas = exports.validationPinRequest = void 0;
const joi_1 = __importDefault(require("joi"));
function validationPinRequest(schema) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield schema.validateAsync(req.body);
            next();
        }
        catch (error) {
            console.log("Validation Error :", error.message);
            return res.status(422).json({ error: error.message });
        }
    });
}
exports.validationPinRequest = validationPinRequest;
exports.Schemas = {
    data: joi_1.default.object({
        username: joi_1.default.string().alphanum().min(3).max(15).required(),
        title: joi_1.default.string(),
        desc: joi_1.default.string(),
        rating: joi_1.default.number().integer().min(0).max(5).required(),
        lat: joi_1.default.number().required(),
        long: joi_1.default.number().required(),
    }),
};
