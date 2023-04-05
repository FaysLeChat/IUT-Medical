import axios from 'axios';

const API_URL = 'http://localhost:8000/';

export async function getUserByEmail(email) {
    try {
        const response = await axios.get(`${API_URL}profile?email=${email}`);
        if (response.status === 200) {
            return response.data;
        } else {
            console.error(`Error: ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Error fetching user info: ${error.message}`);
    }
}
