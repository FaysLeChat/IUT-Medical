import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavbarComponent from '../components/NavbarComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

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

test('renders NavbarComponent with user info', async () => {
    const fakeCookie = {
        amigo: {
            email: 'test@example.com',
        },
    };

    const mock = new MockAdapter(axios);

    // Mock the API call with a resolved promise
    mock.onGet(/profile\?email=.+/).reply(200, { doctor_id: null });

    render(
        <Router>
            <NavbarComponent cookie={fakeCookie} />
        </Router>
    );

    await waitFor(() => {
        const homeLink = screen.getByText(/Accueil/i);
        const contactLink = screen.getByText(/Contact/i);
        const userEmailLink = screen.getByText(/test@example.com/i);
        expect(homeLink).toBeInTheDocument();
        expect(contactLink).toBeInTheDocument();
        expect(userEmailLink).toBeInTheDocument();
    });

    // Clean up the mock
    mock.reset();
});
