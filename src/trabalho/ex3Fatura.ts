class Fatura{
    private numeros:number;
    private descricao:string;
    private quantiaComprada:number;
    private preco:number;

    constructor(numeros:number, descricao:string,quantiaComprada:number,preco:number){
        this.numeros = numeros;
        this.descricao = descricao;
        this.quantiaComprada = quantiaComprada;
        this.preco = preco;
    }

    public getNumeros(){
        return this.numeros
    }
    public getDescricao(){
        return this.descricao;
    }
    public getQuantiaComprada(){
        return this.quantiaComprada
    }
    public getPreco(){
        return this.preco;
    }

    public valorFatura(){
        return this.quantiaComprada * this.preco;
    }

}

const fatura = new Fatura(34435,'produto de teste',5,200)

console.log(fatura.valorFatura())