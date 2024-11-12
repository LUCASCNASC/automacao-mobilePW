import { titulopagina } from '../../../support/para_todos';
import { escolherClientePedido, processoVendaPrincipal, escolherProdutoPesquisa, escolherVoltagemProduto, semSaldodisponivel, 
         clicarBotaoTresPontos, clicarExpandirClienteProcesso, clicarInformeCliente } from '../../../support/para_pedidos/para_pedidos';
import { produtoSemSaldo} from '../../../support/para_pedidos/produtos_pedidos';

describe('Tentar gerar pedido de venda com produto sem saldo - Regra de saldo Parâmetro 36 = 4 - Parâmetro 139 = 4 - Trial 653 não configurado', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina()
    })

    context('Processo 9860 - não permitir fazer a venda - no momento de adicionar produto, devem aparecer mensagens de aviso', () => {

        it.only('Pedido de venda: produto 1869 0 0 (Venda local de produto sem saldo - sem entrega)', () => {
            
            clicarBotaoTresPontos()

            clicarExpandirClienteProcesso()

            processoVendaPrincipal()
            
            clicarInformeCliente()

            escolherClientePedido()

            cy.wait(2000)
    
            produtoSemSaldo()
    
            semSaldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)
    
            // // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()

            //Validando mensagem "Este produto não possui saldo na filial selecionada."
            cy.get('[ng-if="semSaldoCD"][style=""] > p')
                .scrollIntoView()
                .wait(200)
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)')

            //Validando mensagem "Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda."
            cy.get('[ng-show="(itemGradeSelecionado && itemGradeSelecionado.valor > 0)"] > :nth-child(1) > .mensagem-erro-centralizada > p')
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)')

            //Validando botão Adicionar para Simulação
            cy.get('.md-primary.btn-rounded.md-raised.btn-block')
                .should('exist')
                .and('not.be.disabled')
                .and('contain',' Adicionar para Simulação')
        })
    })
})