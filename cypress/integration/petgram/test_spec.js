describe('Mi primer test', function () {
  it('Para ver si funciona', function () {
    expect(true).to.equal(true);
  });

  it('Para ver si la app funciona', function () {
    cy.visit('/');
  });

  it('Navegamos a una categoría y vemos fotos', function () {
    cy.visit('/pet/1');
    cy.get('article');
  });

  it('Si podemos navegar de la navbar a la home', function () {
    cy.visit('/pet/1');
    cy.get('nav a').first().click();
    cy.url().should('include', '/');
  });

  it('Los usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs', function () {
    cy.visit('/favs');
    cy.get('form').should('have.length', 2);
  });
});
