class Veiculos{
    private modelo:string;
    private marca:string;
    private ano:number;
    private valorLocacao:number;
    private quantidadeDias:number;

    constructor(modelo:string, marca:string, ano:number, valorLocacao:number, quantidadeDias:number){
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.valorLocacao = valorLocacao;
        this.quantidadeDias = quantidadeDias;
    }
    public getModelo(){
        return this.modelo;
    }
    public setModelo(modelo:string){
        if (modelo.length<4){
            throw new Error("Modelo Inválido.")
        }                                           //nem precisa do else.
            this.modelo = modelo;
    }

    public getMarca(){
        return this.marca;
    }
    public setMarca(marca:string){
        if(marca.length<3){
           throw new Error("Marca Inválida.")
        }
        this.marca = marca;
    }

    public getAno(){
        return this.ano;
    }
    public setAno(ano:number){
        if(ano<1886){
          throw new Error("Ano Inválido.")
        }
        this.ano = ano;
    }

    public getValorLocacao(){
        return this.valorLocacao;
    }
    public setValorLocacao(valorLocacao:number){
        if(valorLocacao<1){
            throw new Error("Valor da locação inválido")
        }
        this.valorLocacao = valorLocacao;
    }

    public getQuantidadeDias(){
        return this.quantidadeDias;
    }
    public setQuantidadeDias(quantidadeDias:number){
        if(quantidadeDias<1){
            throw new Error("Quantidade de Dias inválida")
        }
        this.quantidadeDias = quantidadeDias;
    }
    
    public Passeio(){
        return `O valor do Passeio é de: ${this.quantidadeDias * this.valorLocacao} R$`
    }

}

const veiculo = new Veiculos('Ford','Fiesta',2015,500,10)
console.log(veiculo)

try {
    veiculo.setModelo('')
    console.log(veiculo.getModelo())
} catch (error) {
    console.log(error.message)
}

try {
    veiculo.setMarca('')
    console.log(veiculo.getMarca())
} catch (error) {
    console.log(error.message)
}

try {
    veiculo.setAno(0)
    console.log(veiculo.getAno())
} catch (error) {
    console.log(error.message)
}

try {
    veiculo.setValorLocacao(0)
    console.log(veiculo.getValorLocacao())
} catch (error) {
    console.log(error.message)
}

try {
    veiculo.setQuantidadeDias(0)
    console.log(veiculo.getQuantidadeDias())
} catch (error) {
    console.log(error.message)
}

console.log(veiculo.Passeio())