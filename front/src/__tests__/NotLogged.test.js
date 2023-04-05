import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotLoggedComponent from '../components/NotLoggedComponent';

describe('NotLoggedComponent', () => {
    test('renders NotLoggedComponent with correct elements', () => {
        render(<NotLoggedComponent />);

        const errorMessage = screen.getByText(/Accès non autorisé/i);
        expect(errorMessage).toBeInTheDocument();

        const errorDescription = screen.getByText(/Tu dois te connecter pour accéder à cette page !/i);
        expect(errorDescription).toBeInTheDocument();
    });
});
