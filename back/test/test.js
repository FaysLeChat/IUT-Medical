const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // your Express.js app file
const expect = chai.expect;

chai.use(chaiHttp);

/* Test: GET doctors */

describe('GET /doctors', () => {
    it('doit retourner tous les doctors', (done) => {
        chai.request(app)
            .get('/doctors')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.be.greaterThan(0);
                done();
            });
    });
});

/* Test: POST appointments */

describe('POST /appointments', () => {
    it('doit creer un nouveau rendez-vous', (done) => {
        const newAppointment = {
            start_time: '2023-04-06 10:00:00',
            end_time: '2023-04-06 11:00:00',
            doctor_id: 1,
            patient_id: 1,
        };
        chai.request(app)
            .post('/appointments')
            .send(newAppointment)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.be.a('number');
                done();
            });
    });
});

/* Test: PUT patients/:id */

describe('PUT /patients/:id', () => {
    it('doit mettre à jour un patient existant', (done) => {
        const updatedPatient = {
            birthdate: '2002-04-09',
            doctor_id: 1
        };
        chai.request(app)
            .put('/patients/1')
            .send(updatedPatient)
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });
    });
});
