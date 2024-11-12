import { titulopagina } from '../../../support/para_todos';
import { clicarBotaoTresPontos, clicarExpandirClienteProcesso, escolherClientePedido, processoVendaPrincipal, clicarInformeCliente,
         okServicosVinculados, saldodisponivel, escolherProdutoPesquisa, escolherVoltagemProduto, modalServicosVinculados, 
         clicarAdicionarProduto, tirarEntrega, avancarParaParcelas, botaoGerarParcelas, carregandoFormaPagamento, 
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento, avancarFinal, botaoFinalizarPedido, finalizandoPedido, 
         pedidoGerado } from '../../../support/para_pedidos/para_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo} from '../../../support/para_pedidos/produtos_pedidos';
import { clicarBotaoDesconto, validarModalSubSobre, aplicarDescontoR$, aplicarDescontoPorcentagem, aplicarDescontoValorFixo } from '../../../support/para_pedidos/para_pedido_desconto';

describe('Gerar pedido de venda com desconto', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina()
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0 com desconto Sub (-) / R$', () => {
            
            clicarBotaoTresPontos()

            clicarExpandirClienteProcesso()

            processoVendaPrincipal()
            
            clicarInformeCliente()

            escolherClientePedido()

            cy.wait(2000)
    
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

            clicarBotaoDesconto()

            validarModalSubSobre()

            aplicarDescontoR$()
    
            tirarEntrega()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(5000)

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(5000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(6000)
        })

        it('Pedido de venda: produto 1860 0 0 com desconto Sub (-) / % (Pocentagem)', () => {
            
            clicarBotaoTresPontos()

            clicarExpandirClienteProcesso()

            processoVendaPrincipal()
            
            clicarInformeCliente()

            escolherClientePedido()

            cy.wait(2000)

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

            clicarBotaoDesconto()

            validarModalSubSobre()

            aplicarDescontoPorcentagem()
    
            tirarEntrega()

            tirarMontagem()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(5000)

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(5000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(6000)
        })

        it('Pedido de venda: produto 1860 0 0 com desconto Sub (-) / VALOR FIXO', () => {
            
            clicarBotaoTresPontos()

            clicarExpandirClienteProcesso()

            processoVendaPrincipal()
            
            clicarInformeCliente()

            escolherClientePedido()

            cy.wait(2000)
    
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

            clicarBotaoDesconto()

            validarModalSubSobre()

            aplicarDescontoValorFixo()
    
            tirarEntrega()

            tirarMontagem()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(5000)

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(5000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(6000)
        })
    })

    afterEach(() => {
        // RESUMO DO PEDIDO - ANTES DE FINALIZAR
        botaoFinalizarPedido()
        finalizandoPedido()
        cy.wait(7000)
        pedidoGerado()
      });
})