"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var createUser_1 = __importDefault(require("./services/createUser"));
function helloWorld(request, response) {
    //const user = createUser('João Pedro','jptambasco@hotmail.com','159159')
    var user = createUser_1.default({
        email: 'jptambasco@hotmail.com',
        password: '123456',
        name: 'Node é legal!',
        techs: ['NodeJS', 'ReacJS', 5,
            { title: 'teste', experience: 100 }]
    });
    console.log(user.email);
    return response.json({ message: 'Hello World!!!!' });
}
exports.helloWorld = helloWorld;
