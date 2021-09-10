interface IEndereco {
    rua:string;
    numero:number;
    bairro:string;
    cidade:string;
}


const meuEndereco: IEndereco = {
    rua: "Cristovao Colombo",
    numero: 41,
    bairro:'Jardim Amalia II',
    cidade:'Volta Redonda',
};

console.log(meuEndereco);

