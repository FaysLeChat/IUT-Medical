describe('FullMedical Alchemist', () => {
    it('Nom de l\'application', () => {
        cy.visit('http://localhost:3000')
        cy.contains("FullMedical Alchemist")
    })
    it('Inscription et connexion réussies', () => {
        // Cliquer sur le bouton d'inscription pour accéder au formulaire d'inscription
        cy.visit('http://localhost:3000/register')
        cy.contains("Inscription")

        // Remplir le formulaire d'inscription avec des données valides
        cy.get('input[name=surname]').type('mon_prénom_utilisateur');
        cy.get('input[name=name]').type('mon_nom_utilisateur');
        cy.get('input[name=email]').type('mon_email@example.com');
        cy.get('input[name=password]').type('mon_mot_de_passe');
        cy.get('button[type=submit]').click();

        // Vérifier que l'utilisateur est redirigé vers la page de connexion
        cy.url().should('include', '/login');

        // Remplir le formulaire de connexion avec les mêmes données utilisées lors de l'inscription
        cy.get('input[name=email]').type('mon_email@example.com');
        cy.get('input[name=password]').type('mon_mot_de_passe');
        cy.get('button[type=submit]').click();

        // Vérifier que l'utilisateur est connecté et redirigé vers la page d'accueil
        cy.url().should('include', '/');
        cy.contains('mon_email@example.com');
    })
    it('Page contact', () => {
        cy.visit('http://localhost:3000/contact')
        cy.contains('Contactez-nous')
    })
})