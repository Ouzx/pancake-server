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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsedTrustedData = void 0;
const data = {
    title: "Used by millions. Trusted with billions.",
    description: "PancakeSwap has the most users of any decentralized platform, ever. And those users are now entrusting the platform with over $2.2 billion in funds.",
    question: "Will you join them?",
    cards: [
        {
            number: "1.6 million",
            adj: "users",
            description: "in the last 30 days",
        },
        {
            number: "21 million",
            adj: "trades",
            description: "made in the last 30 days",
        },
        {
            number: "$2.2 billion",
            adj: "staked  ",
            description: "total Value Locked",
        },
    ],
};
const getUsedTrustedData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(data);
});
exports.getUsedTrustedData = getUsedTrustedData;
