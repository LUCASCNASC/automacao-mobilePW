//produto normal com saldo, para exclusiva
export function primeiroPrdNormalExclusiva (selector) {

    const produto_exclusiva = '1896'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        //.and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_exclusiva)
        .wait(100)
        .should('have.value', produto_exclusiva)
}

//produto kit normal sem saldo, para exclusiva e sem saldo a receber
export function kitSemSaldoAgendamento (selector) {

    const kit_semsaldo = '1900'

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear({force:true})

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(kit_semsaldo)
        .wait(100)
        .should('have.value', kit_semsaldo)
}

//produto kit com 6 volumes e com saldo, para exclusiva e sem saldo a receber
export function kitVolumes (selector) {

    const kit_volumes = '1903'

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear({force:true})
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(kit_volumes)
        .wait(100)
        .should('have.value', kit_volumes)
}

//produto normal com saldo a receber, para exclusiva
export function produtoSaldoReceber (selector) {

    const produto_saldoreceber = '1905'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        //.and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_saldoreceber)
        .wait(100)
        .should('have.value', produto_saldoreceber)
}

//produto normal com saldo a receber e outra parte solicitar compra, para exclusiva
export function prdSaldoReceberDuasLinhas (selector) {

    const produto_saldoreceber_duaslinhas = '1906'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        //.and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_saldoreceber_duaslinhas)
        .wait(100)
        .should('have.value', produto_saldoreceber_duaslinhas)
}

//aumentar quantidade a ser vendida, 5 unidades
export function aumentarQuantVendaCinco (selector) {

    //botão para diminuir quantidade
    cy.get('[ng-click="delItem()"]')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validar campo Quantidade
    cy.get('[ng-model="quantidadeShow"]')
        .should('exist')
        .and('be.visible')
        .and('be.disabled')
        .and('have.value', '1')

    //botão para aumentar quantidade
    cy.get('[ng-click="addItem()"]')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão para aumentar quantidade
    cy.get('[ng-click="addItem()"]')
        .click()
        .click()
        .click()
        .click()
        .click()
}

//aumentar quantidade a ser vendida, 10 unidades
export function aumentarQuantVendaDez (selector) {

    //botão para diminuir quantidade
    cy.get('[ng-click="delItem()"]')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validar campo Quantidade
    cy.get('[ng-model="quantidadeShow"]')
        .should('exist')
        .and('be.visible')
        .and('be.disabled')
        .and('have.value', '1')

    //botão para aumentar quantidade
    cy.get('[ng-click="addItem()"]')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão para aumentar quantidade
    cy.get('[ng-click="addItem()"]')
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
}

//Validando produto com saldo indisponível
export function saldoRemotoAReceber (selector) {
    
    //Validando imagem
    cy.get('.resultado-imagem')
        .should('exist')
        .and('be.visible')

    //Validando "Saldo disponivel"
    cy.get('.label')
        .should('exist')
        .and('be.visible')
        .and('have.text','Saldo disponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(240, 173, 78)')

    //Validando nome do produto dentro card
    cy.get('.md-resultado-titulo')
        .should('exist')
        .and('be.visible')

    //Validado código do produto dentro do card
    cy.get('.badge-saldo.ng-binding')
        .should('exist')
        .and('be.visible')

    //Validando R$ dentro do card
    cy.get('sup')
        .should('exist')
        .and('be.visible')
        .and('have.text','R$')

    //Validando valor do produto dentro do card
    cy.get('.valor-busca')
        .should('exist')
        .and('be.visible')

    //Validando check box dentro do card
    cy.get('.expandeIcone')
        .should('exist')
        .and('be.visible')
}

//Para escolher processo de venda 9869 para exclusiva
export function processoVendaExclusiva (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_5 > .md-select-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .should('exist')
        //.and('be.visible')

    //selecionar processo de venda "9869"
    cy.get('#select_option_76 > .md-text')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        //.and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}