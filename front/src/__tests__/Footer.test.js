import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FooterComponent from '../components/FooterComponent';

describe('FooterComponent', () => {
    test('renders FooterComponent with correct elements', () => {
        render(<FooterComponent />);

        const logo = screen.getByAltText(/dramigo/i);
        expect(logo).toBeInTheDocument();

        const address = screen.getByText(/l'université SP, 16 Rue de l'Université/i);
        expect(address).toBeInTheDocument();
    });
});
