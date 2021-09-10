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
var Vendedores = /** @class */ (function () {
    function Vendedores(nome, salario, valorVenda) {
        this.nome = nome;
        this.salario = salario;
        this.valorVenda = valorVenda;
    }
    Vendedores.prototype.getNome = function () {
        return this.nome;
    };
    Vendedores.prototype.setNome = function (nome) {
        if (nome.length < 1) {
            throw new Error("Nome Inválido!");
        }
        else {
            this.nome = nome;
        }
    };
    Vendedores.prototype.getSalario = function () {
        return this.salario;
    };
    Vendedores.prototype.setSalario = function (salario) {
        if (salario < 1) {
            throw new Error("Salario Inválido!");
        }
        this.salario = salario;
    };
    Vendedores.prototype.getValorVenda = function () {
        return this.valorVenda;
    };
    Vendedores.prototype.setValorVenda = function (valorVenda) {
        if (valorVenda < 1) {
            throw new Error("Valor de venda Inválido!");
        }
        this.valorVenda = valorVenda;
    };
    Vendedores.prototype.desconto = function () {
        return (this.salario / 100) * 8;
    };
    return Vendedores;
}());
var VendedorPessoaFisica = /** @class */ (function (_super) {
    __extends(VendedorPessoaFisica, _super);
    function VendedorPessoaFisica(nome, salario, valorVenda, regiao) {
        var _this = _super.call(this, nome, salario, valorVenda) || this;
        _this.regiao = regiao;
        return _this;
    }
    VendedorPessoaFisica.prototype.getRegiao = function () {
        return this.regiao;
    };
    VendedorPessoaFisica.prototype.setRegiao = function (regiao) {
        if (!VendedorPessoaFisica.REGIOES.includes(regiao.toLowerCase())) {
            throw new Error("Região inválida!");
        }
        else {
            this.regiao = regiao;
        }
    };
    VendedorPessoaFisica.prototype.calcularComissao = function () {
        if (this.regiao == 'sul') {
            return (this.getValorVenda() / 100) * 10;
        }
        else if (this.regiao == 'sudeste') {
            return (this.getValorVenda() / 100) * 12;
        }
        else if (this.regiao == 'centro-oeste') {
            return (this.getValorVenda() / 100) * 14;
        }
        else if (this.regiao == 'norte') {
            return (this.getValorVenda() / 100) * 15;
        }
        else if (this.regiao == 'nordeste') {
            return (this.getValorVenda() / 100) * 17;
        }
        else {
            throw new Error("Região inexistente");
        }
    };
    VendedorPessoaFisica.prototype.salarioTotal = function () {
        return this.getSalario() + this.calcularComissao();
    };
    VendedorPessoaFisica.REGIOES = ['sul', 'sudeste', 'centro-oeste', 'norte', 'nordeste'];
    return VendedorPessoaFisica;
}(Vendedores));
var pessoaFisica1 = new VendedorPessoaFisica('Joao', 4000, 200, 'sul');
console.log(pessoaFisica1.salarioTotal());
try {
    pessoaFisica1.setNome('');
}
catch (error) {
    console.log(error.message);
}
try {
    pessoaFisica1.setRegiao('patatipatata');
}
catch (error) {
    console.log(error.message);
}
try {
    pessoaFisica1.setSalario(0);
}
catch (error) {
    console.log(error.message);
}
try {
    pessoaFisica1.setValorVenda(0);
}
catch (error) {
    console.log(error.message);
}
var VendedorPessoaJuridica = /** @class */ (function (_super) {
    __extends(VendedorPessoaJuridica, _super);
    function VendedorPessoaJuridica(nome, salario, valorVenda, nomeEmpresa, totalFuncionarios) {
        var _this = _super.call(this, nome, salario, valorVenda) || this;
        _this.nomeEmpresa = nomeEmpresa;
        _this.totalFuncionarios = totalFuncionarios;
        return _this;
    }
    VendedorPessoaJuridica.prototype.getNomeEmpresa = function () {
        return this.nomeEmpresa;
    };
    VendedorPessoaJuridica.prototype.setNomeEmpresa = function (nomeEmpresa) {
        if (nomeEmpresa.length < 1) {
            throw new Error("Nome da empresa inválido!");
        }
        else {
            this.nomeEmpresa = nomeEmpresa;
        }
    };
    VendedorPessoaJuridica.prototype.getTotalFuncionarios = function () {
        return this.totalFuncionarios;
    };
    VendedorPessoaJuridica.prototype.setTotalFuncionarios = function (totalFuncionarios) {
        if (totalFuncionarios < 1) {
            throw new Error("Total de funcionarios inválido");
        }
        else {
            this.totalFuncionarios = totalFuncionarios;
        }
    };
    VendedorPessoaJuridica.prototype.calcularComissao = function () {
        if (this.getValorVenda() < 5000) {
            return (this.getValorVenda() / 100) * 2;
        }
        else if (this.getValorVenda() >= 5000 && this.getValorVenda() < 10000) {
            return (this.getValorVenda() / 100) * 4;
        }
        else if (this.getValorVenda() >= 1000) {
            return (this.getValorVenda() / 100) * 6;
        }
        else {
            return 0;
        }
    };
    VendedorPessoaJuridica.prototype.salarioTotal = function () {
        if (this.getTotalFuncionarios() < 100) {
            return this.getSalario() + this.calcularComissao() + 200;
        }
        else if (this.getTotalFuncionarios() >= 100) {
            return this.getSalario() + this.calcularComissao() + 300;
        }
    };
    return VendedorPessoaJuridica;
}(Vendedores));
var pessoaJuridica = new VendedorPessoaJuridica('Joao', 1500, 4000, 'EmpresaX', 50);
//console.log(pessoaJuridica.getValorVenda())
console.log(pessoaJuridica.calcularComissao());
console.log(pessoaJuridica.salarioTotal());
try {
    pessoaJuridica.setTotalFuncionarios(0);
    console.log(pessoaJuridica.getTotalFuncionarios());
}
catch (error) {
    console.log(error.message);
}
try {
    pessoaJuridica.setNomeEmpresa('');
}
catch (error) {
    console.log(error.message);
}
