function Reserva(data_entrada,data_saida,hospede,quarto,custo_reserva,forma_pagamento){
    this.data_entrada = data_entrada;
    this.data_saida = data_saida;
    this.hospede = hospede;
    this.quarto = quarto;
    this.custo_reserva = custo_reserva;
    this.forma_pagamento = forma_pagamento;
}

function Hospede(nome, cpf, telefone){
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
}

function Quarto(banheiro, capacidade, diaria, observacoes){
    this.numeroQuarto = numeroQuarto;
    this.banheiro = banheiro | 0;
    this.eletronicos = eletronicos | [];
    this.capacidade = capacidade;
    this.diaria = diaria;
    this.observacoes = observacoes;
}

var hospedes = [];
var reservas = [];
var quartos = [];