import { titulopagina } from '../../../support/para_todos';
import { clicarBotaoTresPontos, clicarExpandirClienteProcesso, clicarInformeCliente, escolherClientePedido, saldodisponivel,
         escolherProdutoPesquisa, escolherVoltagemProduto, botãoAdicionarProduto, modalServicosVinculados, okServicosVinculados,
         tirarEntrega, avancarParaParcelas, botaoGerarParcelas, carregandoFormaPagamento, avancarFinal, aguardeCarregandoParaFinal, 
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento, tirarEntregaSegundo, avancarParaTransportadora, avancarParcelasEntrega,
         processoFinanceiroBaixa} from '../../../support/para_pedidos/para_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos.js';

describe('Gerar pedido com financeiro na baixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina() 
        clicarBotaoTresPontos()
        clicarExpandirClienteProcesso()
        processoFinanceiroBaixa() 
        clicarInformeCliente()
        escolherClientePedido()
        cy.wait(2000)
    })
  
    context('Sem frete/ processo 9863 - caminho feliz', () => {

        it.skip('Pedido de venda: produto 1860 0 0', () => {

            produtoNormalPrimeiro()
            
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

        it.skip('Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {

            produtoNormalPrimeiro()
            
            saldodisponivel()
            
            escolherProdutoPesquisa()

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()

            botãoAdicionarProduto()

            modalServicosVinculados()

            okServicosVinculados()

            tirarEntrega()

            cy.wait(400)

            produtoNormalSegundo()

            saldodisponivel()
            
            escolherProdutoPesquisa()

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()

            botãoAdicionarProduto()

            modalServicosVinculados()

            okServicosVinculados()

            tirarEntregaSegundo()

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
    
    context('Com frete/ processo 9863 - caminho feliz', () => {

        it.skip('Pedido de venda: produto 1860 0 0', () => {

            produtoNormalPrimeiro()
            
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

            avancarParcelasEntrega()
        
            cy.wait(8000)

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

        it.skip('Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {

            produtoNormalPrimeiro()
            
            saldodisponivel()
            
            escolherProdutoPesquisa()

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()

            botãoAdicionarProduto()

            modalServicosVinculados()

            okServicosVinculados()

            cy.wait(400)

            produtoNormalSegundo()

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

            avancarParcelasEntrega()
        
            cy.wait(8000)

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