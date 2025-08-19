function calcWeightedGrade(items){


    if(typeof items !== 'object'){
        throw new TypeError('No es un array');
    }

    let sumaWeight = 0;
    let total = 0;
    for(let item of items){
        if(item['score'] < 0 || item['score'] > 100){
            throw new RangeError('Rango de score excedido del elemento:\n' + item);
        }else if(item['weight'] < 0 || item['weight'] > 1){
            throw new RangeError('Rango de weight excedido del elemento:\n' + item);
        }

        sumaWeight += item['weight'];
        total += (item['score'] * item['weight']);
        
    }

    let tolerancia = 0.001;
    const limSuperior = 1 + tolerancia;
    const limInferior = 0 - tolerancia;
    if(sumaWeight > limSuperior || sumaWeight < limInferior){
        throw new RangeError('Suma total de weight excedida.');
    }

    total = total.toFixed(2);
    return total;

}

module.exports = calcWeightedGrade;