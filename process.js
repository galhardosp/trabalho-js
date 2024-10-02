



function createQuarto(){
    nome = prompt("Dgite o nome dos hospede");
    cpf = prompt("Dgite o CPF dos hospede");
    telefone = prompt("Dgite o telefone dos hospede");
    tempHospede = new Hospede(nome, cpf, telefone);
    hospedes.push(tempHospede);
}

function createHospede(){
    nome = prompt("Dgite o nome dos hospede");
    cpf = prompt("Dgite o CPF dos hospede");
    telefone = prompt("Dgite o telefone dos hospede");
    tempHospede = new Hospede(nome, cpf, telefone);
    hospedes.push(tempHospede);
}

function createReservas(){
    data_entrada = prompt("Dgite a data de entrada");
    data_saida = prompt("Dgite a data de saida");
    forma_pagamento = prompt("Dgite a forma de pagamento");
    tempHospede = new Hospede(data_entrada,data_saida,custo_reserva,forma_pagamento);
    hospedes.push(tempHospede);
}

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