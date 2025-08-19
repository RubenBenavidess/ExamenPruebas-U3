function percentile(p, values){

    if(typeof values !== 'object'){
        throw new TypeError('No es un array');
    }

    if(values.length < 1){
        throw new Error('La lista debe contener al menos 2 elementos.');
    }

    for(let n of values){
        if(isNaN(n))
            return TypeError('La lista contiene un elemento que no es un número: ' + n);
    }

    values.sort();

    if(p === 0){
        return values[0].toFixed(2);
    }

    if(typeof p !== 'number' || isNaN(p) || p < 0 || p > 100){
        throw new RangeError('El percentil debe estar en el rango [0, 100].');
    }

    values = values.slice().sort((a, b) => a - b);

    const N = values.length;
    const rank = Math.ceil((p / 100) * N);
    const indice = Math.max(0, rank - 1);

    return values[indice].toFixed(2);
    
}

module.exports = percentile;
