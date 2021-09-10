"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Endereco = /** @class */ (function () {
    function Endereco() {
    }
    return Endereco;
}());
var ImprimirEndereco = /** @class */ (function (_super) {
    __extends(ImprimirEndereco, _super);
    function ImprimirEndereco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImprimirEndereco.prototype.endereco = function (_a) {
        var rua = _a.rua, numero = _a.numero, bairro = _a.bairro, cidade = _a.cidade;
        console.log(rua, numero, bairro, cidade);
        return true;
    };
    return ImprimirEndereco;
}(Endereco));
var enderecoNovo = new ImprimirEndereco();
console.log(enderecoNovo.endereco({ rua: 'Cristovao Colombo', numero: 21, bairro: 'Jardim Amalia', cidade: 'Volta Redonda' }));
