const {
    preencherLogin,   
    iniciarCadastro,
    preencherFormularioCadastro   
} = require('../modules/cadastro')



describe('Automation Exercise', () => {    it('Cadastrar um novo usuário com sucesso', () => {
        cy.visit('/') 

        const email = `vmv${Date.now()}@teste.com`      
             

        iniciarCadastro('Vmv', email)                  
        
        preencherFormularioCadastro()

        validarCadastro()    

        
    });

    it('Login com sucesso', () => {
        cy.visit('/')

        preencherLogin('vmv@teste.com', 'vmv123456')

        validarSeLoginFoiBemSucedido()      
        

    });

    it('Login com email e senha incorretos', () => {
        cy.visit('/')


        preencherLogin('teste@teste.com', '999999')

        validarSeLoginFalhou()              
        
    });


     it('Logout com sucesso', () => {
        cy.visit('/')

        
        preencherLogin('vmv@teste.com', 'vmv123456')

        validarLogoutComSucesso()
    });


    it('Tentar cadastrar usuário com email já existente', () => {
        cy.visit('/')

        iniciarCadastro('Vmv', 'vmv@teste.com')

        validarCadastroJaExistente()       
    });


});


function validarCadastro() {

    cy.url().should('include', '/account_created');      

}


function validarCadastroJaExistente() {
   
    cy.get('.signup-form > form > p')
            .should('contain.text', 'Email Address already exist!');

}


function validarSeLoginFalhou() {
    cy.get('.login-form > form > p')
            .should('contain.text', 'Your email or password is incorrect!');

}

function validarLogoutComSucesso() {
    cy.get('a[href*=logout]')
        .should('be.visible')
        .click();

        cy.get('.login-form > h2')
            .should('be.visible')
            .should('contain.text', 'Login to your account');

         cy.url().should('include', '/login');  

}

function validarSeLoginFoiBemSucedido() {
    cy.contains(' Logged in as Vmv').should('be.visible');

}

