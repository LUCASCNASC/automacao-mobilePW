//Para escolher processo de venda 9888 - serviços avulsos - quando já temos uma nota de venda de produto e quando vamos vender igual produto
export function processoVendaServicoAvulso (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .should('exist')
        .and('be.visible')
        .scrollTo('center')

    //selecionar processo de venda "9888"
    cy.get('#select_option_65 > .md-text')
        .scrollIntoView()
        .wait(100)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//Função para escolher cliente CPF para gerar pedido de venda - pesquisa por cliente
export function escolherClientePedido (selector) {

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(500)
        .type('48976249089 {downArrow}')

    cy.wait(200)

    //clicar na lupa de pesquisa de clientes
    cy.get('.md-block > .ng-binding')
        .should('exist')
        .and('be.visible')
        .click()

    cy.wait(1500)

    //após a pesquisa encontrar o cliente, vamos selecionar ele
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .should('exist')
        .and('be.visible')
        .click()
}

//Validar e clicar no menu de opções
export function iconeMenuOpcoes (selector) {

    //Ícone do menu de opções
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')
            
    //Clicar ni ícone do menu de opções
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
        .click({force:true})
}

//Validando opção Cliente Completo, do menu de opções
export function clienteCompletoOpcaoMenu (selector) {

    //ícone Cliente completo
    cy.get('md-icon[md-svg-src="images/icons/cliente_completo.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .should('have.attr', 'aria-label', 'Cliente completo')

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .click({force:true})
}

//Validando e inserindo número do pedido no campo Cliente ou pedido
export function pesquisarPedidoNumero (selector) {

    //Campo Cliente ou pedido - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="input_96"]')
        .should('have.text', 'Cliente ou pedido')     

    //Campo Cliente ou pedido
    cy.get('#input_96')
        .should('exist')
        .and('be.visible')
        .and('have.value','')
        .type(nomeClienteCPF, {force: true})
}

//Validando menu dentro do cadastro de cliente completo
export function clicarMenuClienteCompleto (selector) {

    //Validando 
    cy.get('#menu_click_pri')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //clicar no menu
    cy.get('#menu_click_pri')
        .click({force:true})
}

//Validando opção serviços
export function clicarOpcaoServicos (selector) {

    //Validando
    cy.get('div[ng-repeat="tab in tabs"][ng-if="tab.checked"]')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Serviços')
        .and('not.have.attr', 'disabled')

    //Clicar no elemento
    cy.get('#menu_mais_pri > :nth-child(3)')
        .click({force:true})
}

//Mensagem de carregamento aba serviços
export function aguardeCarregandoServico (selector) {

    //ícone de carregamento
    cy.get('.layout-align-center-center > .md-accent')
        .should('exist')
        .and('be.visible')

    //Mensagem "Aguarde carregando..."
    cy.get('.carregando')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Aguarde carregando...')
}

//Validando botão ADICIONAR MÃO DE OBRA
export function botaoAddMaoObra (selector) {

    cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(1) > .md-default')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Adicionar Mão de Obra')
        .and('not.have.attr', 'disabled')
}

//Validando botão ADICIONAR GARANTIAS
export function botaoAddGarantias (selector) {

    cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(2) > .md-default')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Adicionar Garantias')
        .and('not.have.attr', 'disabled')
}

//Clicar no botão ADICIONAR MÃO DE OBRA
export function clicarAddMaoObra (selector) {

    cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(1) > .md-default')
        .click({force:true})
}

//Clicar no botão ADICIONAR GARANTIAS
export function clicarAddGarantias (selector) {

    cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(2) > .md-default')
        .click({force:true})
}

//Validações card de serviços apenas com Garantias
export function modalGarantiasServicosVinculados (selector) {

    //Título do modal - Serviços Vinculados
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Serviços Vinculados')

    //botão x do modal Serviços Vinculados
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //mensagem do modal Serviços Vinculados - "Garantias"
    cy.get('p.ng-binding')
        .contains('Garantias')
        .should('exist')
        .and('be.visible')
}

//Validações card de serviços
export function modalMaoObraServicosVinculados (selector) {

    //Título do modal - Serviços Vinculados
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Serviços Vinculados')

    //botão x do modal Serviços Vinculados
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //mensagem do modal Serviços Vinculados - "Mão de Obra"
    cy.get('p.ng-binding')
        .contains('Mão de Obra')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
}

//botão OK modal Serviços Vinculados
export function okServicosVinculados (selector) {

    //validando botão
    cy.get('button[ng-click="salvar()"]')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text',' Ok ')

    //clicar no botão
    cy.get('button[ng-click="salvar()"]')
        .click({force:true})
}

//Mensagem de "Item adicionado com sucesso!"
export function messServicoAdicionadoSucesso (selector) {

    //Item adicionado com sucesso! - card inteiro
    cy.get('.toast')
        .should('exist')
        .and('be.visible')

    //Item adicionado com sucesso! - Aviso
    cy.get('.toast-title')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Aviso')

    //Item adicionado com sucesso! - Mensagem em si
    cy.get('.toast-message')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Item adicionado com sucesso!')

}

//Botão SALVAR
export function botaoSalvarServico (selector) {

    //Validando botão completo
    cy.get('.btn')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain',' SALVAR ')

    cy.get('.btn > .ng-scope')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //clicar no botão
    cy.get('.btn')
        .click({force:true})
}

//Mensagem de carregamento após clicarmos em SALVAR, do serviço
export function messAguardeCarregando (selector) {

    //ícone giratório
    cy.get('svg')
        .should('exist')
        .and('be.visible')

    //Mensagem "Aguarde carregando..."
    cy.get('#dialogContent_209 > .layout-align-center-center > h3')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Aguarde carregando...')
}

//Mensagem de "Registro salvo com sucesso!"
export function messRegistroSalvoSucesso (selector) {

    //Registro salvo com sucesso! - card inteiro
    cy.get('[style="display: block;"]')
        .should('exist')
        .and('be.visible')

    //Registro salvo com sucesso! - Aviso
    cy.get(':nth-child(1) > .toast-title')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Aviso')

    //Registro salvo com sucesso!! - Mensagem em si
    cy.get(':nth-child(1) > .toast-message')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Registro salvo com sucesso!')

}

//Mensagem de "O Serviço Garantias já foi adicionado à esse produto."
export function messGarantiaJaAdicionada (selector) {

    //O Serviço Garantias já foi adicionado à esse produto. - card inteiro
    cy.get('.toast-warning')
        .should('exist')
        .and('be.visible')

    //O Serviço Garantias já foi adicionado à esse produto. - Aviso
    cy.get('.toast-warning > .toast-title')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Atenção')

    //O Serviço Garantias já foi adicionado à esse produto. - Mensagem em si
    cy.get('.toast-warning')
        .should('exist')
        .and('be.visible')
        .and('contain', 'O Serviço Garantias já foi adicionado à esse produto.')
}

//Clicar no carrinho de compras
export function clicarCarrinhoCompras (selector) {

    //validando
    cy.get('#test_btnCarrinho > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .click({force:true})
}

//Botão AVANÇAR
export function botaoAvancarPedido (selector) {

    //validando botão
    cy.get('.flex-gt-sm-50 > .md-primary')
        .scrollIntoView()
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text',' Avançar ')
        .click({force:true})
}

//Escolher servico, para vende-lo - 144 (T.A. MO Não Destaca e Separa Processo Diferente)
export function produtoServicoAvulso (selector) {

    const codigo_servico = '144'

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
        .type(codigo_servico)
        .wait(100)
        .should('have.value', codigo_servico)
}

//Validando serviço com saldo disponível local
export function saldoDisponivelServico (selector) {
    
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
        .should('equal', 'rgb(92, 184, 92)')

    //Validando nome do serviço dentro card
    cy.get('.md-resultado-titulo')
        .should('exist')
        .and('be.visible')

    //Validado código do serviço dentro do card
    cy.get('.badge-saldo.ng-binding')
        .should('exist')
        .and('be.visible')

    //Validando R$ dentro do card
    cy.get('sup')
        .should('exist')
        .and('be.visible')
        .and('have.text','R$')

    //Validando valor do serviço dentro do card
    cy.get('.valor-busca')
        .should('exist')
        .and('be.visible')
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherServicoPesquisa (selector) {

    //Imagem do produto
    cy.get('.resultado-imagem')
        .should('exist')
        .and('be.visible')

    //Nome do produto
    cy.get('.md-resultado-titulo')
        .should('exist')
        .and('be.visible')

    //Saldo disponível
    cy.get('.md-list-item-text > .ng-scope')
        .should('exist')
        .and('be.visible')

    //Código do produto
    cy.get('.badge-saldo.ng-binding')
        .should('exist')
        .and('be.visible')

    //Cifrão do valor do produto
    cy.get('sup')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'R$')

    //Valor do produto
    cy.get('.valor-busca')
        .should('exist')
        .and('be.visible')

    //Clicar para adicionar no carrinho
    cy.get('.md-list-item-text')
        .should('exist')
        .and('be.visible')
        .click({force:true})
}

//Escolher servico host, para vende-lo - 104 (Recarga Homologação TIM TIM)
export function produtoServicoHost (selector) {

    const codigo_servicoHost = '104'

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
        .type(codigo_servicoHost)
        .wait(100)
        .should('have.value', codigo_servicoHost)
}

//Validando e clicando opção Serviços, do menu de opções
export function clicarServicosMenu (selector) {

    //Opção Serviços no menu de opções
    cy.get('a[aria-label="Serviços"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Serviços no menu de opções
    cy.get('a[aria-label="Serviços"]')
        .should('have.attr', 'aria-label', 'Serviços')

    //ícone Serviços 
    cy.get('md-icon[md-svg-src="images/icons/services.svg"]')
        .scrollIntoView()
        .should('exist')
        .click({force:true})
}

//modal para selecionar faixa de preço para o serviço - clicar e escolher o valor
export function escolherValorRecarga (selector) {

    //validando título do modal
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Selecione uma faixa de preço para o serviço')

    //validando botão X do modal
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando Garantia Celular Host
    cy.get('.md-subheader-content')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Recarga Celular HOST')

    //validando nome do serviço, dentro do card
    cy.get('h3.ng-binding')
        .should('exist')
        .and('be.visible')

    //validando Valor do serviço dentro do card
    cy.get('.md-no-style > .md-list-item-text > p.ng-binding')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Valor:')

    //validando "Valor" na escolha do valor da recarga
    cy.get('.md-secondary-container > :nth-child(1)')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Valor')

    //seta para escolher valor da recarga
    cy.get('#select_value_label_121 > .md-select-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})

    //selecionando valor da recarga
    cy.contains('10,00')
        .click({force:true})

    cy.wait(200)

    //clicando no botão OK após selecionarmos o valor da recarga
    cy.get('.layout-align-end-end > .md-raised')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Ok ')
        .click({force:true})      
}