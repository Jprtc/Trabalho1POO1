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
var DadosGerais = /** @class */ (function () {
    function DadosGerais(nome, rendaAnual) {
        this.nome = nome;
        this.rendaAnual = rendaAnual;
    }
    DadosGerais.prototype.getNome = function () {
        return this.nome;
    };
    DadosGerais.prototype.setNome = function (nome) {
        if (nome.length < 1) {
            throw new Error("Nome Inválido!");
        }
        else {
            this.nome = nome;
        }
    };
    DadosGerais.prototype.getRendaAnual = function () {
        return this.rendaAnual;
    };
    DadosGerais.prototype.setRendaAnual = function (rendaAnual) {
        if (rendaAnual < 1) {
            throw new Error("Renda Anual inválida.");
        }
        else {
            this.rendaAnual = rendaAnual;
        }
    };
    return DadosGerais;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, rendaAnual, gastosSaude) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this.gastosSaude = gastosSaude;
        return _this;
    }
    PessoaFisica.prototype.getGastosSaude = function () {
        return this.gastosSaude;
    };
    PessoaFisica.prototype.setGastosSaude = function (gastosSaude) {
        if (gastosSaude < 1) {
            throw new Error("Gastos com saúde inválido.");
        }
        else {
            this.gastosSaude = gastosSaude;
        }
    };
    PessoaFisica.prototype.calcularImposto = function () {
        if (this.getRendaAnual() < 20000) {
            return (this.getRendaAnual() / 100) * 15 - (this.gastosSaude / 100) * 50;
        }
        else if (this.getRendaAnual() > 20000) {
            return (this.getRendaAnual() / 100) * 25 - (this.gastosSaude / 100) * 50;
        }
    };
    return PessoaFisica;
}(DadosGerais));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(nome, rendaAnual, numeroFuncionarios) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this.numeroFuncionarios = numeroFuncionarios;
        return _this;
    }
    PessoaJuridica.prototype.getNumeroFuncionarios = function () {
        return this.numeroFuncionarios;
    };
    PessoaJuridica.prototype.setNumeroFuncionarios = function (numeroFuncionarios) {
        if (numeroFuncionarios < 1) {
            throw new Error("Numero de funcionários inválido.");
        }
        else {
            this.numeroFuncionarios = numeroFuncionarios;
        }
    };
    PessoaJuridica.prototype.calcularImposto = function () {
        if (this.numeroFuncionarios > 10) {
            return (this.getRendaAnual() / 100) * 14;
        }
        else {
            return (this.getRendaAnual() / 100) * 16;
        }
    };
    return PessoaJuridica;
}(DadosGerais));
var pessoaFisica = new PessoaFisica('Joao', 10000, 500);
var pessoaFisica2 = new PessoaFisica('Maria', 25000, 2000);
try {
    pessoaFisica.setNome('');
}
catch (error) {
    console.log(error.message);
}
try {
    pessoaFisica.setRendaAnual(0);
}
catch (error) {
    console.log(error.message);
}
try {
    pessoaFisica.setGastosSaude(0);
}
catch (error) {
    console.log(error.message);
}
console.log("Imposto de renda do " + pessoaFisica.getNome() + " \u00E9:", pessoaFisica.calcularImposto());
console.log("Imposto de renda da " + pessoaFisica2.getNome() + " \u00E9:", pessoaFisica2.calcularImposto());
var pessoaJuridica1 = new PessoaJuridica('EmpresaX', 400000, 25);
console.log("Imposto de renda da " + pessoaJuridica1.getNome() + " \u00E9:", pessoaJuridica1.calcularImposto());
try {
    pessoaJuridica1.setNumeroFuncionarios(0);
}
catch (error) {
    console.log(error.message);
}
var pessoaJuridica2 = new PessoaJuridica('StartupChop', 400000, 9);
console.log("Imposto de renda da " + pessoaJuridica2.getNome() + " \u00E9:", pessoaJuridica2.calcularImposto());
