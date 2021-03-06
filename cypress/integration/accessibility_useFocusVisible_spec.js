describe('useFocusVisible Accessibility check', () => {
  beforeEach(() => {
    cy.visit('/useFocusVisible');
    cy.injectAxe();
  });

  it('Tests accessibility on the useFocusVisible page', () => {
    cy.configureAxe({
      rules: [
        {
          id: 'color-contrast',
          enabled: false,
        },
      ],
    });
    cy.checkA11y();
  });
});
