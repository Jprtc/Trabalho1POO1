"use strict";
var Veiculos = /** @class */ (function () {
    function Veiculos(modelo, marca, ano, valorLocacao, quantidadeDias) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.valorLocacao = valorLocacao;
        this.quantidadeDias = quantidadeDias;
    }
    Veiculos.prototype.getModelo = function () {
        return this.modelo;
    };
    Veiculos.prototype.setModelo = function (modelo) {
        if (modelo.length < 4) {
            throw new Error("Modelo Inválido.");
        } //nem precisa do else.
        this.modelo = modelo;
    };
    Veiculos.prototype.getMarca = function () {
        return this.marca;
    };
    Veiculos.prototype.setMarca = function (marca) {
        if (marca.length < 3) {
            throw new Error("Marca Inválida.");
        }
        this.marca = marca;
    };
    Veiculos.prototype.getAno = function () {
        return this.ano;
    };
    Veiculos.prototype.setAno = function (ano) {
        if (ano < 1886) {
            throw new Error("Ano Inválido.");
        }
        this.ano = ano;
    };
    Veiculos.prototype.getValorLocacao = function () {
        return this.valorLocacao;
    };
    Veiculos.prototype.setValorLocacao = function (valorLocacao) {
        if (valorLocacao < 1) {
            throw new Error("Valor da locação inválido");
        }
        this.valorLocacao = valorLocacao;
    };
    Veiculos.prototype.getQuantidadeDias = function () {
        return this.quantidadeDias;
    };
    Veiculos.prototype.setQuantidadeDias = function (quantidadeDias) {
        if (quantidadeDias < 1) {
            throw new Error("Quantidade de Dias inválida");
        }
        this.quantidadeDias = quantidadeDias;
    };
    Veiculos.prototype.Passeio = function () {
        return "O valor do Passeio \u00E9 de: " + this.quantidadeDias * this.valorLocacao + " R$";
    };
    return Veiculos;
}());
var veiculo = new Veiculos('Ford', 'Fiesta', 2015, 500, 10);
console.log(veiculo);
try {
    veiculo.setModelo('');
    console.log(veiculo.getModelo());
}
catch (error) {
    console.log(error.message);
}
try {
    veiculo.setMarca('');
    console.log(veiculo.getMarca());
}
catch (error) {
    console.log(error.message);
}
try {
    veiculo.setAno(0);
    console.log(veiculo.getAno());
}
catch (error) {
    console.log(error.message);
}
try {
    veiculo.setValorLocacao(0);
    console.log(veiculo.getValorLocacao());
}
catch (error) {
    console.log(error.message);
}
try {
    veiculo.setQuantidadeDias(0);
    console.log(veiculo.getQuantidadeDias());
}
catch (error) {
    console.log(error.message);
}
console.log(veiculo.Passeio());
