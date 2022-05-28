export function Semaforo (cor){
    let x = "";

    if(cor == "verde")
        x = "Pode Passar";
    else if(cor == "vermelho")
        x = "Aguarde";
    else
        x = "Inválido";

    return x;
}

export function DiaSemana(dia){
    let x = "";

    if(dia == 0)
        x = "DOMINGO";
     
    else if (dia == 1)
        x = "SEGUNDA";

    else if (dia == 2)
        x ="TERÇA";
    
    else if (dia ==3)
        x = "QUARTA";

    else if (dia == 4)
        x ="QUINTA";
    
    else if (dia == 5)
        x ="SEXTA";
    
    else if (dia == 6)
        x ="SÁBADO";
    else
        x = "coloque um número de 0 a 6";

    return x;
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