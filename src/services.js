export function Semaforo (cor){
    let x = "";

    if(cor == "verde")
        return x = "Pode Passar";
    else if(cor == "vermelho")
        return x = "Aguarde";
    else
        return x = "Inválido";
}

export function DiaSemana(dia){
    let x ="";

    if(dia == 0)
        return x = "DOMINGO";
     
    else if (dia == 1)
        return x = "SEGUNDA";

    else if (dia == 2)
        return x ="TERÇA";
    
    else if (dia ==3)
        return x = "QUARTA";

    else if (dia == 4)
        return x ="QUINTA";
    
    else if (dia == 5)
        return x ="SEXTA";
    
    else if (dia == 6)
        return x ="SÁBADO";
    else
        return x = "coloque um número de 0 a 6";
}

export function Fatorial (num){
    let fat = 1;
    for(let i = num; i >= 1; i--){
        fat = fat * i;
    }
    return fat;
}

export function SequenciaPar (num){
    let array = [];
    for(let i = 0; i < num; i++){
        array[i] = i * 2;
    }
    return array;
}