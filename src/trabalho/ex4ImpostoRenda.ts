class DadosGerais{
    private nome:string;
    private rendaAnual:number;

    constructor(nome:string,rendaAnual:number){
        this.nome = nome;
        this.rendaAnual = rendaAnual;
    }

   public getNome(){
        return this.nome;
    }
    public setNome(nome:string){
        if (nome.length <1){
            throw new Error("Nome Inválido!") 
        } else{
            this.nome = nome;
        }
    }

    public getRendaAnual(){
        return this.rendaAnual;
    }

    public setRendaAnual(rendaAnual:number){
        if (rendaAnual <1){
            throw new Error("Renda Anual inválida.") 
        } else{
            this.rendaAnual = rendaAnual; 
        }
    }

}

class PessoaFisica extends DadosGerais{
    gastosSaude:number;

    constructor(nome:string,rendaAnual:number,gastosSaude:number){
        super(nome,rendaAnual)
        this.gastosSaude = gastosSaude;
    }

    public getGastosSaude(){
        return this.gastosSaude
    }

    public setGastosSaude(gastosSaude:number){
        if (gastosSaude<1){
            throw new Error("Gastos com saúde inválido.")
        } else{
            this.gastosSaude = gastosSaude;
        }
    }

    calcularImposto() {
        if(this.getRendaAnual()<20000){
           return (this.getRendaAnual()/100)*15 - (this.gastosSaude/100)*50
        } else if(this.getRendaAnual()>20000){
           return (this.getRendaAnual()/100)*25 - (this.gastosSaude/100)*50
        }
        
    }

}

class PessoaJuridica extends DadosGerais{
    numeroFuncionarios:number;

    constructor(nome:string,rendaAnual:number,numeroFuncionarios:number){
        super(nome,rendaAnual)
        this.numeroFuncionarios = numeroFuncionarios;
    }

    public getNumeroFuncionarios(){
        return this.numeroFuncionarios
    }
    public setNumeroFuncionarios(numeroFuncionarios:number){
        if(numeroFuncionarios<1){
            throw new Error("Numero de funcionários inválido.")
        } else {
            this.numeroFuncionarios =numeroFuncionarios;
        }
    }
    calcularImposto() {
        if(this.numeroFuncionarios>10){
            return (this.getRendaAnual()/100)*14
        } else {
            return (this.getRendaAnual()/100)*16
        }
    }
}

const pessoaFisica = new PessoaFisica('Joao',10000,500)
const pessoaFisica2 = new PessoaFisica('Maria',25000,2000)

try {
    pessoaFisica.setNome('')
} catch (error) {
    console.log(error.message)
}

try {
    pessoaFisica.setRendaAnual(0)
} catch (error) {
    console.log(error.message)
}

try {
    pessoaFisica.setGastosSaude(0)
} catch (error) {
    console.log(error.message)
}



console.log(`Imposto de renda do ${pessoaFisica.getNome()} é:`, pessoaFisica.calcularImposto())
console.log(`Imposto de renda da ${pessoaFisica2.getNome()} é:`, pessoaFisica2.calcularImposto())

const pessoaJuridica1 = new PessoaJuridica('EmpresaX',400000,25)
console.log(`Imposto de renda da ${pessoaJuridica1.getNome()} é:`, pessoaJuridica1.calcularImposto())


try {
    pessoaJuridica1.setNumeroFuncionarios(0)
} catch (error) {
    console.log(error.message)
}


const pessoaJuridica2 = new PessoaJuridica('StartupChop',400000,9)
console.log(`Imposto de renda da ${pessoaJuridica2.getNome()} é:`, pessoaJuridica2.calcularImposto())
