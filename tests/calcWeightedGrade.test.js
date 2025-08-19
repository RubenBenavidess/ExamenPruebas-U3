const calcWeightedGrade = require('../src/utils/calcWeightedGrade');

test('Suma ponderada de [{score:80,weight:0.4},{score:90,weight:0.6}] debe dar 86.00', () => {
    resultado = calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}]);
    expect(resultado).toBe('86.00');
});

