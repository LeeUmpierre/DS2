"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const app_1 = __importDefault(require("./app"));
try {
    typeorm_1.createConnection().then(connection => {
        app_1.default.listen(3333, () => {
            console.log('Running on port 3333');
        });
    }).catch(error => {
        console.log("N foi possivel conctar ao DB. ", error.message);
    });
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=index.js.map