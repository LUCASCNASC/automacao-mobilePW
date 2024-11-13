import { titulopagina } from '../../../support/para_todos';
import { clicarBotaoTresPontos, clicarExpandirClienteProcesso, processoVendaPrincipal, clicarInformeCliente, escolherClientePedido,
         botaoGerarParcelas, carregandoFormaPagamento, avancarFinal, escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento,
         botaoFinalizarPedido, finalizandoPedido, pedidoGerado, escolherRota, escolherTransportadora, avancarParaTransportadora,
         avancarParcelasEntrega, trocarFilialFaturamento, clicarAdicionarProduto, modalInconsApenasRota} from '../../../support/para_pedidos/para_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos.js';

describe('Remoto/processo 9860 - caminho feliz', () => {

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
  
    it.skip('Pedido de venda remota: produto 1860 0 0', () => {

        produtoNormalPrimeiro()

        saldodisponivel()

        escolherProdutoPesquisa()

        cy.wait(200)

        // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                  
        escolherVoltagemProduto()
        
        cy.wait(400)

        trocarFilialFaturamento()

        clicarAdicionarProduto()

        cy.wait(500)

        modalServicosVinculados()

        okServicosVinculados()

        cy.wait(400)

        avancarParaTransportadora()

        // tela para ESCOLHER TRANSPORTADORA

        cy.wait(12000)

        modalInconsApenasRota()

        escolherTransportadora()
    
        escolherRota()

        avancarParcelasEntrega()
    
        cy.wait(7000)

        // tela de GERAR PARCELAS

        botaoGerarParcelas()

        carregandoFormaPagamento()

        cy.wait(7000)

        escolherFormaPagamentoPrincipal()

        escolherDuasParcelaPagamento()

        cy.wait(400)

        avancarFinal()

        cy.wait(7500)
    })

    afterEach(() => {
        // RESUMO DO PEDIDO - ANTES DE FINALIZAR
        botaoFinalizarPedido()
        finalizandoPedido()
        cy.wait(9000)
        pedidoGerado()
      });
})