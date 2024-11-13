import { titulopagina } from '../../../support/para_todos';
import { clicarBotaoTresPontos, clicarExpandirClienteProcesso, processoVendaPrincipal, clicarInformeCliente, escolherClientePedido, 
         saldodisponivel, escolherProdutoPesquisa, escolherVoltagemProduto, botãoAdicionarProduto, modalServicosVinculados, okServicosVinculados,
         tirarEntrega, avancarParaParcelas, botaoGerarParcelas, carregandoFormaPagamento, avancarFinal, aguardeCarregandoParaFinal, 
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento, botaoFinalizarPedido, finalizandoPedido, pedidoGerado, 
         escolherRota, escolherTransportadora, avancarParaTransportadora, avancarParcelasEntrega, modalInconsRotaTransp} from '../../../support/para_pedidos/para_pedidos.js';
import { produtoKitPrimeiro } from '../../../support/para_pedidos/produtos_pedidos.js';

describe('Gerar pedido normal', () => {

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
        
        it.skip('Pedido de venda: kit 1862 0 0', () => {

            produtoKitPrimeiro()
            
            saldodisponivel()
            
            escolherProdutoPesquisa()

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()

            botãoAdicionarProduto()

            modalServicosVinculados()

            okServicosVinculados()

            tirarEntrega()

            avancarParaParcelas()

            cy.wait(6000)

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(4000)

            escolherFormaPagamentoPrincipal()
    
            escolherDuasParcelaPagamento()  

            cy.wait(400)
    
            avancarFinal()

            aguardeCarregandoParaFinal()

            cy.wait(6000)
        })
    })
    
    context('Com frete/processo 9860 - caminho feliz', () => {
        
        it('Pedido de venda: kit 1862 0 0', () => {

            produtoKitPrimeiro()
            
            saldodisponivel()
            
            escolherProdutoPesquisa()

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()

            botãoAdicionarProduto()

            modalServicosVinculados()

            okServicosVinculados()

            avancarParaTransportadora()

            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(11000)

            modalInconsRotaTransp()

            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(6500)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(5500)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(7000)
        })
    })

    afterEach(() => {
        // RESUMO DO PEDIDO - ANTES DE FINALIZAR
        botaoFinalizarPedido()
        finalizandoPedido()
        cy.wait(9000)
        pedidoGerado()
      });
})