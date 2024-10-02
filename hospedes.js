function buscaHospede(cpf){
    for(let i = 0; i <= hospedes.length; i++){
        if(hospedes[i].cpf == cpf){
            hosp = hospedes[i];
            break;

        }else{
            return null;
        }
    } return hosp;
}

function createHospede(){
    nome = prompt("Dgite o nome dos hospede");
    cpf = prompt("Dgite o CPF dos hospede");
    telefone = prompt("Dgite o telefone dos hospede");
    tempHospede = new Hospede(nome, cpf, telefone);
    hospedes.push(tempHospede);
}