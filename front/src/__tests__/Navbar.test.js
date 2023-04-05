import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';

// Fonction utilitaire pour envelopper le composant avec BrowserRouter
const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('NavbarComponent', () => {
    test('renders NavbarComponent with correct links', () => {
        renderWithRouter(<NavbarComponent />);

        const brandElement = screen.getByText(/FullMedical Alchemist/i);
        expect(brandElement).toBeInTheDocument();

        const homeLink = screen.getByText(/Accueil/i);
        expect(homeLink).toBeInTheDocument();
        expect(homeLink.closest('a')).toHaveAttribute('href', '/');

        const contactLink = screen.getByText(/Contact/i);
        expect(contactLink).toBeInTheDocument();
        expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');
    });
});
