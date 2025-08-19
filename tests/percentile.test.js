const percentile = require('../src/utils/percentile');

test('Percentil de 0,[1,2,3] debe dar 1.00', () => {
    resultado = percentile(0,[1,2,3]);
    expect(resultado).toBe('1.00');
});

test('Percentil de 100,[1,2,3] debe dar 3.00', () => {
    resultado = percentile(100,[1,2,3]);
    expect(resultado).toBe('3.00');
});

test('Percentil de 50,[1,2,3,4] debe dar 2.00', () => {
    resultado = percentile(50,[1,2,3,4]);
    expect(resultado).toBe('2.00');
});

