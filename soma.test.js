const soma = require('./soma')

// describe é um grupo de testes
describe('Teste de soma', () =>{
    test('deve verificar o resultado de uma soma', ()=> {
        expect(soma(3, 8)).toBe(11)
    })
// pode ser "test" ou "it"
    test('deve verificar o resultado incorreto de uma soma', ()=> {
    expect(soma(3, 8)).not.toBe(12)
    })

})

