interface IEndereco{
    rua:string;
    numero:number;
    bairro:string;
    cidade:string;
}

abstract class Endereco{
    abstract endereco({rua,numero,bairro,cidade}:IEndereco):boolean;
}



class ImprimirEndereco extends Endereco{
    endereco({rua,numero,bairro,cidade}:IEndereco):boolean{
        console.log(rua,numero,bairro,cidade)
        return true
    }
}

const enderecoNovo = new ImprimirEndereco();
console.log(enderecoNovo.endereco({rua: 'Cristovao Colombo',numero:21,bairro:'Jardim Amalia',cidade:'Volta Redonda'}))

