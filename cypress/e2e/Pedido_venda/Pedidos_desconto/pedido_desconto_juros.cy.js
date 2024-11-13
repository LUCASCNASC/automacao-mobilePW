import { titulopagina } from '../../../support/para_todos';
import { clicarBotaoTresPontos, clicarExpandirClienteProcesso, processoVendaPrincipal, clicarInformeCliente, escolherClientePedido, 
         saldodisponivel, escolherProdutoPesquisa, escolherVoltagemProduto, clicarAdicionarProduto, modalServicosVinculados, okServicosVinculados,
         tirarEntrega, avancarParaParcelas, botaoGerarParcelas, carregandoFormaPagamento, avancarFinal, 
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento, botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/para_pedidos.js';
import { produtoNormalPrimeiro } from '../../../support/para_pedidos/produtos_pedidos';
import { arrastarFormaPagamento, clicarAlterarValor, modalAlterarValor, alterarValorParaBaixo, alterarValorParaCima } from '../../../support/para_pedidos/para_pedido_desconto';

describe('Gerar pedido normal com desconto nos juros - parametros 243 e 244 definidos no processo de inclusão', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina()
        clicarBotaoTresPontos()
        clicarExpandirClienteProcesso()
        processoVendaPrincipal() 
        clicarInformeCliente()
        escolherClientePedido()
        cy.wait(2000)
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it.skip('Pedido de venda: produto 1860 0 0 - arredondar para baixo', () => {
    
            produtoNormalPrimeiro()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()
         
            clicarAdicionarProduto()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntrega()
    
            cy.wait(400)

            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(5000)

            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(4000)
    
            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            arrastarFormaPagamento()

            clicarAlterarValor()

            modalAlterarValor()

            alterarValorParaBaixo()

            cy.wait(400)
    
            avancarFinal()
    
            cy.wait(6000)
        })

        it.skip('Pedido de venda: produtos 1860 0 0 - arredondar para cima', () => {
    
            produtoNormalPrimeiro()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()
         
            clicarAdicionarProduto()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntrega()
    
            cy.wait(400)

            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(5000)

            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(4000)
    
            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            arrastarFormaPagamento()

            clicarAlterarValor()

            modalAlterarValor()

            alterarValorParaCima()

            cy.wait(400)
    
            avancarFinal()
    
            cy.wait(6000)
        })
    })

    afterEach(() => {
        // RESUMO DO PEDIDO - ANTES DE FINALIZAR
        botaoFinalizarPedido()
        finalizandoPedido()
        cy.wait(8000)
        pedidoGerado()
      });
})