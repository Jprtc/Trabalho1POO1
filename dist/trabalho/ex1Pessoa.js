"use strict";
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sexo, idade) {
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (nome) {
        if (nome.length < 1) {
            throw new Error("Nome Inválido!");
        }
        else {
            this.nome = nome;
        }
    };
    Pessoa.prototype.getSexo = function () {
        return this.sexo;
    };
    Pessoa.prototype.setSexo = function (sexo) {
        if (!Pessoa.SEXOS.includes(sexo.toLowerCase())) {
            throw new Error("Sexo Inválido!");
        }
        this.sexo = sexo;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.setIdade = function (idade) {
        if (idade < 1) {
            throw new Error("Idade Inválida!");
        }
        this.idade = idade;
    };
    Pessoa.prototype.ReceberIdade = function () {
        if (this.idade >= 18) {
            return 'Pessoa Maior de Idade.';
        }
        else {
            return 'Pessoa Menor de Idade.';
        }
    };
    Pessoa.SEXOS = ['masculino', 'feminino'];
    return Pessoa;
}());
var pessoa = new Pessoa('Joao', 'Masculino', 23);
console.log(pessoa);
try {
    pessoa.setNome('');
    console.log(pessoa);
}
catch (error) {
    console.log(error.message);
}
try {
    pessoa.setSexo('FEMININO');
    console.log(pessoa);
}
catch (error) {
    console.log(error.message);
}
try {
    pessoa.setIdade(23);
    console.log(pessoa);
}
catch (error) {
    console.log(error.message);
}
console.log(pessoa.ReceberIdade());
