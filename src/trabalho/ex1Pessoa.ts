class Pessoa{

    static SEXOS = ['masculino','feminino']

    private nome:string;
    private sexo:string;
    private idade:number;
    
    constructor(nome:string, sexo:string, idade:number) {
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
    }
    public getNome() {
         return this.nome;
    }
    public setNome(nome:string) {
        if (nome.length <1){
            throw new Error("Nome Inválido!") 
        } else{
            this.nome = nome;
        }
    }

    public getSexo() {
        return this.sexo;
    }
    public setSexo(sexo:string) {
        if (!Pessoa.SEXOS.includes(sexo.toLowerCase())){
            throw new Error("Sexo Inválido!")
        }
        this.sexo = sexo;
    }
    public getIdade() {
        return this.idade
    }
    public setIdade(idade:number) {
        if(idade<1){
            throw new Error("Idade Inválida!")
        }
        this.idade = idade;
    }
    public ReceberIdade():string {
        if (this.idade >=18){
            return 'Pessoa Maior de Idade.'
        } else{
            return 'Pessoa Menor de Idade.'
        }
    }

}

const pessoa = new Pessoa('Joao','Masculino',23)
console.log(pessoa)

try {
    pessoa.setNome('')
    console.log(pessoa)
} catch (error) {
    console.log(error.message)
}

try {
    pessoa.setSexo('FEMININO')
    console.log(pessoa)
} catch (error) {
    console.log(error.message)
}

try {
    pessoa.setIdade(23)
    console.log(pessoa)
} catch (error) {
    console.log(error.message)
}

console.log(pessoa.ReceberIdade())



