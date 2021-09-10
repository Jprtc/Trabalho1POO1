class Vendedores{
    private nome:string;
    private salario:number;
    private valorVenda:number;

    constructor(nome:string, salario:number, valorVenda:number){
        this.nome = nome;
        this.salario = salario;
        this.valorVenda = valorVenda;
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
   public getSalario() {
    return this.salario
   }

   public setSalario(salario:number) {
    if(salario<1){
        throw new Error("Salario Inválido!")
    }
    this.salario = salario;
    }

    public getValorVenda() {
        return this.valorVenda
    }
    
    public setValorVenda(valorVenda:number) {
     if(valorVenda<1){
            throw new Error("Valor de venda Inválido!")
      }
     this.valorVenda = valorVenda;
    }

    public desconto(){
        return (this.salario/100)*8
    }

}

class VendedorPessoaFisica extends Vendedores{

    static REGIOES = ['sul','sudeste','centro-oeste','norte','nordeste']

    private regiao:string;

    constructor(nome:string,salario:number,valorVenda:number,regiao:string){
        super(nome,salario,valorVenda);
        this.regiao = regiao;
    }

    public getRegiao(){
        return this.regiao;
    }
    public setRegiao(regiao:string){
        if(!VendedorPessoaFisica.REGIOES.includes(regiao.toLowerCase())){
            throw new Error("Região inválida!")
        } else{
            this.regiao = regiao;
        }
    }

    public calcularComissao(){
        if(this.regiao == 'sul'){
            return (this.getValorVenda()/100)*10 
        } else if(this.regiao =='sudeste'){
            return (this.getValorVenda()/100)*12 
        } else if(this.regiao =='centro-oeste'){
            return (this.getValorVenda()/100)*14 
        } else if(this.regiao =='norte'){
            return (this.getValorVenda()/100)*15 
        } else if (this.regiao =='nordeste'){
            return (this.getValorVenda()/100)*17 
        } else{
            throw new Error("Região inexistente")
        }
    }
    public salarioTotal(){
        return this.getSalario() + this.calcularComissao()
    }
}

const pessoaFisica1 = new VendedorPessoaFisica('Joao',4000,200,'sul')
console.log(pessoaFisica1.salarioTotal())

try {
    pessoaFisica1.setNome('')
} catch (error) {
    console.log(error.message)
}

try {
    pessoaFisica1.setRegiao('patatipatata')
} catch (error) {
    console.log(error.message)
}

try {
    pessoaFisica1.setSalario(0)
} catch (error) {
    console.log(error.message)
}

try {
    pessoaFisica1.setValorVenda(0)
} catch (error) {
    console.log(error.message)
}




class VendedorPessoaJuridica extends Vendedores{
    nomeEmpresa: string;
    totalFuncionarios: number;

    constructor(nome:string, salario:number, valorVenda:number,nomeEmpresa:string,totalFuncionarios:number){
        super(nome,salario,valorVenda,)
        this.nomeEmpresa = nomeEmpresa;
        this.totalFuncionarios = totalFuncionarios;
    }

    getNomeEmpresa(){
        return this.nomeEmpresa;
    }
    setNomeEmpresa(nomeEmpresa:string){
        if (nomeEmpresa.length<1){
            throw new Error("Nome da empresa inválido!")
        } else{
            this.nomeEmpresa = nomeEmpresa;
        }
    }

    getTotalFuncionarios(){
        return this.totalFuncionarios;
    }
    setTotalFuncionarios(totalFuncionarios: number){
        if(totalFuncionarios<1){
            throw new Error("Total de funcionarios inválido")
        } else{
            this.totalFuncionarios = totalFuncionarios;
        }
    }

    calcularComissao(){
        if (this.getValorVenda()<5000){
            return (this.getValorVenda()/100)*2
        } else if(this.getValorVenda()>=5000 && this.getValorVenda()<10000){
            return (this.getValorVenda()/100)*4
        } else if (this.getValorVenda()>=1000){
            return (this.getValorVenda()/100)*6
        } else{
            return 0
        }
    }

    salarioTotal(){
        if(this.getTotalFuncionarios()<100){
            return this.getSalario() + this.calcularComissao() + 200
        } else if(this.getTotalFuncionarios()>=100){
            return this.getSalario() + this.calcularComissao() + 300
        }
    }

}

const pessoaJuridica = new VendedorPessoaJuridica('Joao',1500,4000,'EmpresaX',50)
//console.log(pessoaJuridica.getValorVenda())
console.log(pessoaJuridica.calcularComissao())
console.log(pessoaJuridica.salarioTotal())

try {
    pessoaJuridica.setTotalFuncionarios(0)
    console.log(pessoaJuridica.getTotalFuncionarios())
} catch (error) {
    console.log(error.message)
}

try {
    pessoaJuridica.setNomeEmpresa('')
} catch (error) {
    console.log(error.message)
}


