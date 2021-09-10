"use strict";
var Fatura = /** @class */ (function () {
    function Fatura(numeros, descricao, quantiaComprada, preco) {
        this.numeros = numeros;
        this.descricao = descricao;
        this.quantiaComprada = quantiaComprada;
        this.preco = preco;
    }
    Fatura.prototype.getNumeros = function () {
        return this.numeros;
    };
    Fatura.prototype.getDescricao = function () {
        return this.descricao;
    };
    Fatura.prototype.getQuantiaComprada = function () {
        return this.quantiaComprada;
    };
    Fatura.prototype.getPreco = function () {
        return this.preco;
    };
    Fatura.prototype.valorFatura = function () {
        return this.quantiaComprada * this.preco;
    };
    return Fatura;
}());
var fatura = new Fatura(34435, 'produto de teste', 5, 200);
console.log(fatura.valorFatura());
