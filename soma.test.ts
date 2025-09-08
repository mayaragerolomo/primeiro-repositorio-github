import soma from './soma'

// describe é um grupo de testes
describe('Teste de soma', () =>{
    test('deve verificar o resultado de uma soma', ()=> {
        expect(soma(3, 8)).toBeCloseTo(11)
    })
// pode ser "test" ou "it"
    test('deve verificar o resultado incorreto de uma soma', ()=> {
    expect(soma(3, 8)).not.toBeCloseTo(12)
    })

})

