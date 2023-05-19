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
exports.getCakeData = void 0;
const data = {
    headerFirstWord: "CAKE",
    headerText: " makes our world go round.",
    paragraphText: "CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!",
    buttonText: "Buy CAKE",
    linkText: "Learn",
    blocks: [
        {
            entry: "Circulating Supply",
            data: "200,369,318",
        },
        {
            entry: "Market cap",
            data: "$370 million",
        },
        {
            entry: "Total supply",
            data: "385,464,216",
        },
        {
            entry: "Burned to date",
            data: "826,186,824",
        },
        {
            entry: "Max Supply",
            data: "750,000,000",
        },
        {
            entry: "Current emissions",
            data: "5.23/block",
        },
    ],
};
const getCakeData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(data);
});
exports.getCakeData = getCakeData;
