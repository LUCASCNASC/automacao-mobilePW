//Importando funções 
import { titulopagina } from '../../support/para_todos';
import { logoEmpresaLogin, iconeComputadorLogin, usuarioTextoIcone, senhaTextoIcone, iconeOlhosSenha, botaoEsqueceuSenha, botaoEntrarHabilitado, 
         clicarBotaoEntrar, mensagemEntrandoSistema } from '../../support/para_logins/para_login';

const usuSabiumAutomacao = "usu.expirado";
const senhaautomacao = "123.automacao";
describe('Senha do sistema expirada', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        titulopagina()//Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
    })

    it('Tentar logar com usuário com senha do sistema expirada', () => {

        logoEmpresaLogin()

        iconeComputadorLogin()

        usuarioTextoIcone()
    
        //Validando campo "informe seu usuário"
        cy.get('#txtusername')
            .should('exist')
            .and('be.visible')
            .and('have.value','')
            .type((usuSabiumAutomacao))
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe seu usuário')

        senhaTextoIcone()

        //Campo Informe sua senha
        cy.get('#txtpassword')
            .should('exist')
            .and('be.visible')
            .and('have.value','')
            .type((senhaautomacao))
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe sua senha')

        iconeOlhosSenha()

        botaoEsqueceuSenha()

        botaoEntrarHabilitado()

        clicarBotaoEntrar()

        mensagemEntrandoSistema()

        cy.wait(2000)

        //Mensagem "Seu acesso ao sistema expirou."
        cy.get('.md-dialog-content-body')
            .should('exist')
            .and('be.visible')
            .and('have.text','Seu acesso ao sistema expirou.')

        //Botão OK da mensagem "Seu acesso ao sistema expirou."
        cy.get('md-dialog-actions > .md-primary')
            .should('exist')
            .and('be.visible')
            .and('have.text','Ok')
            .and('not.have.attr', 'disabled')

        //Clicar no botão OK da mensagem "Seu acesso ao sistema expirou."
        cy.get('md-dialog-actions > .md-primary')
            .click()

        iconeComputadorLogin()
    })
})