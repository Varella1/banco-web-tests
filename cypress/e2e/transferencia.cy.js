describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credenciais').then(credenciais => {
            cy.get('#username').click().type(credenciais.valida.usuario)
            cy.get('#senha').click().type(credenciais.valida.senha)
        })
        cy.contains('button', 'Entrar').click()

    })
    it('Deve transferir quando informo dados e valor válido', () => {
        //Act
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem').contains('João da Silva com saldo de').click()
        
        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino').contains('Maria Oliveira com saldo de').click()
        
        cy.get('#valor').type('100')
        
        cy.contains('button', 'Transferir').click()
        
        //Assert
        cy.get('.toast').should('have.text','Transferência realizada!')
    })
        
        
})
