function buscaQuarto(numeroQuarto){
    for(let i = 0; i <= quartos.length; i++){
        if(quartos[i].numeroQuarto == numeroQuarto){
            quarto = quartos[i];
            break;

        }else{
            return null;
        }
    } return quarto;
}

function createQuarto(){
    let numeroQuartos = prompt("Dgite o numero do quarto");
    let banheiros = Number(prompt("Dgite o CPF dos hospede"));
    let eletronicos = prompt("Dgite os eletronicos divididos por virgula");
    let capacidade = Number(prompt("Dgite a quantidade de hospedes"));
    let diaria = Number(prompt("Dgite a quantidade de diarias"));
    let observacoes = prompt("Dgite alguma observação que deseja");
    tempQuarto = new Quarto(numeroQuartos, banheiros, eletronicos,capacidade, diaria, observacoes);
    quartos.push(tempQuarto);
}

function searchQuartos(numeroQuarto){
    
}