describe('App E2E', () => {
  it('shold have a header in main page', () => {
    cy.visit('/');

    cy.get('header');
  });

  it('shold have a keypad in main page', () => {
    cy.contains('0');
    cy.contains('1');
    cy.contains('2');
    cy.contains('3');
    cy.contains('4');
    cy.contains('5');
    cy.contains('6');
    cy.contains('7');
    cy.contains('8');
    cy.contains('9');
    cy.contains('/');
    cy.contains('*');
    cy.contains('-');
    cy.contains('+');
    cy.contains('(');
    cy.contains(')');
    cy.contains('=');
    cy.contains('C');
    cy.contains('CE');
    cy.contains('.');
  });

  it('check keypad and display work', () => {
    cy.contains('1').click();
    cy.contains('2').click();
    cy.contains('12');
    cy.contains('.').click();
    cy.contains('4').click();
    cy.contains('12.4');
  });

  it('check key C', () => {
    cy.contains('C').click();
    cy.contains('12.');
  });

  it('check calculator work', () => {
    cy.contains('4').click();
    cy.contains('*').click();
    cy.contains('(').click();
    cy.contains('8').click();
    cy.contains('/').click();
    cy.contains('3').click();
    cy.contains(')').click();
    cy.contains('+').click();
    cy.contains('9').click();
    cy.contains('=').click();
    cy.contains('42.06666666666666');
  });

  it('check error alert', () => {
    cy.contains('*').click();
    cy.contains('*').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Wrong expression');
    });
  });

  it('check history', () => {
    cy.contains('CE').click();
    cy.contains('5').click();
    cy.contains('=').click();
    cy.contains('=').click();

    cy.contains('History').click();

    cy.get('li').should('have.length', 3);
  });

  it('check history hidden', () => {
    cy.contains('History').click();

    cy.contains('History hidden');
  });

  it('check Setting link', () => {
    cy.contains('Setting').click();

    cy.location('pathname').should('eq', '/Setting');
  });

  it('check clear history', () => {
    cy.contains('Clear All History').click();

    cy.contains('Home').click();

    cy.contains('History').click();

    cy.get('li').should('have.length', 0);
  });

  it('check change style', () => {
    cy.contains('Setting').click();

    cy.get('select').select('dark');

    cy.get('body').should('have.css', 'background').and('include', 'rgb(0, 0, 0)');

    cy.get('select').select('light');

    cy.get('body').should('have.css', 'background').and('include', 'rgb(255, 255, 255)');
  });
});
