import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavbarComponent from '../components/NavbarComponent';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders NavbarComponent without user info', () => {
    render(
        <Router>
            <NavbarComponent />
        </Router>
    );
    const homeLink = screen.getByText(/Accueil/i);
    const contactLink = screen.getByText(/Contact/i);
    const guestLink = screen.getByText(/Invité/i);
    expect(homeLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(guestLink).toBeInTheDocument();
});

test('renders NavbarComponent with user info', () => {
    const fakeCookie = {
        amigo: {
            email: 'test@example.com',
        },
    };

    render(
        <Router>
            <NavbarComponent cookie={fakeCookie} />
        </Router>
    );
    const homeLink = screen.getByText(/Accueil/i);
    const contactLink = screen.getByText(/Contact/i);
    const userEmailLink = screen.getByText(/test@example.com/i);
    expect(homeLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(userEmailLink).toBeInTheDocument();
});
