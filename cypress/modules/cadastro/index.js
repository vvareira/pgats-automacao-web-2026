
function preencherLogin(email, senha) {
    cy.get('.shop-menu > .nav > :nth-child(4)').click()
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(senha)
    cy.get('[data-qa="login-button"]').click();   


}


function iniciarCadastro(nome, email) {   
    cy.get('.shop-menu > .nav > :nth-child(4)').click();
    cy.get('[data-qa="signup-name"]').type(nome);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

}

function preencherFormularioCadastro() {  
    cy.get('#id_gender2').check();
    cy.get('[data-qa="password"]').type('123456'); 
    cy.get('[data-qa="days"]').select('10');
    cy.get('[data-qa="months"]').select('May');
    cy.get('[data-qa="years"]').select('1990'); 
    cy.get('[data-qa="first_name"]').type('First Name');
    cy.get('[data-qa="last_name"]').type('Last Name');
    cy.get('#address1').type('Rua Teste, 123');
    cy.get('#address2').type('Rua Teste, 123');
    cy.get('#country').select('Canada');
    cy.get('[data-qa="city"]').type('Porto Alegre');
    cy.get('[data-qa="state"]').type('RS');
    cy.get('[data-qa="zipcode"]').type(91352265);
    cy.get('[data-qa="mobile_number"]').type('999999');
    cy.get('[data-qa="create-account"]').click();

  }





module.exports = {    
        preencherLogin,       
        iniciarCadastro,            
        preencherFormularioCadastro,       
    
}