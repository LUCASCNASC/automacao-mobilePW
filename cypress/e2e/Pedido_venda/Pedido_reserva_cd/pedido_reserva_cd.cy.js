import { titulopagina } from '../../../support/para_todos';
import { clicarBotaoTresPontos, clicarExpandirClienteProcesso, processoVendaPrincipal, clicarInformeCliente, escolherClientePedido, 
         saldodisponivel, escolherProdutoPesquisa, escolherVoltagemProduto, botãoAdicionarProduto, modalServicosVinculados, okServicosVinculados,
         tirarEntrega, avancarParaParcelas, botaoGerarParcelas, carregandoFormaPagamento, avancarFinal, aguardeCarregandoParaFinal, 
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento, botaoFinalizarPedido, finalizandoPedido, pedidoGerado, 
         tirarEntregaSegundo, escolherRota, escolherTransportadora, avancarParaTransportadora, avancarParcelasEntrega, modalInconsRotaTransp, 
         saldoCDDisponivel, clicarAdicionarProduto, tirarMontagem} from '../../../support/para_pedidos/para_pedidos.js';
import { produtoCDPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos.js';

describe('Gerar pedido com reserva no CD - Regra de saldo Parâmetro 36 = 4 - Parâmetro 139 = 4 - Trial 653 não configurado', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina() 
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it.skip('Venda: produto 1880 0 0 - (Venda local de produto com saldo só no CD - sem entrega)', () => {
            
            clicarBotaoTresPontos()

            clicarExpandirClienteProcesso()

            processoVendaPrincipal()
            
            clicarInformeCliente()

            escolherClientePedido()

            cy.wait(2000)
    
            produtoCDPrimeiro()
    
            saldoCDDisponivel()
    
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
    
            cy.wait(6500)

            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(5000)
    
            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)
    
            avancarFinal()
    
            cy.wait(6000) 
        })

        it.skip('Venda: produtos 1880 0 0 (reserva CD) e 1870 0 0 (saldo local) - (Venda local de 1 produto com saldo local + 1 produto com saldo no CD - sem entrega)', () => {
    
            clicarBotaoTresPontos()

            clicarExpandirClienteProcesso()

            processoVendaPrincipal()
            
            clicarInformeCliente()

            escolherClientePedido()

            cy.wait(2000)
    
            produtoCDPrimeiro()
    
            saldoCDDisponivel()
    
            escolherProdutoPesquisa()

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            cy.wait(200)
                      
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntrega()

            cy.wait(800)
    
            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()

            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntregaSegundo()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(6500)
    
            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(6000)
    
            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()
    
            cy.wait(400)
    
            avancarFinal()
    
            cy.wait(7000)
        })
    })

    context('Com frete/ processo 9860 - caminho feliz', () => {

        it.skip('Venda: produto 1880 0 0 - (Venda local de produto com saldo só no CD - com entrega)', () => {
    
            clicarBotaoTresPontos()

            clicarExpandirClienteProcesso()

            processoVendaPrincipal()
            
            clicarInformeCliente()

            escolherClientePedido()

            cy.wait(2000)
    
            produtoCDPrimeiro()

            saldoCDDisponivel()
    
            escolherProdutoPesquisa()
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(200)
                      
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(12000)

            modalInconsRotaTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(7500)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(6500)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(7000)
        })

        it.skip('Venda: produtos 1880 0 0 (reserva CD) e 1870 0 0 (saldo local) - (Venda local de 1 produto com saldo local + 1 produto com saldo no CD - com entrega)', () => {
    
            clicarBotaoTresPontos()

            clicarExpandirClienteProcesso()

            processoVendaPrincipal()
            
            clicarInformeCliente()

            escolherClientePedido()

            cy.wait(2000)

            produtoCDPrimeiro()

            saldoCDDisponivel()
    
            escolherProdutoPesquisa()
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(200)
                      
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            cy.wait(400)
    
            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            cy.wait(1000)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            modalInconsRotaTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(8000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(7000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
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