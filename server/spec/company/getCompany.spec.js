const app = require('../../app');
const request = require('supertest');
const authHelper = require('../helpers/authHelper');

describe('GET /company', () => {

    describe('test auth', () => {
        it("without auth throws 401", (done) => {
            request(app).get('/company')
                .expect(401, done);
        });

        it("with admin returns 200", (done) => {
            request(app).get('/company')
                .set('Cookie', [`_session=${authHelper.generateAdminToken()}`])
                .expect(200, done);
        });


        it("with approver returns 200", (done) => {
            request(app).get('/company')
                .set('Cookie', [`_session=${authHelper.generateApproverToken()}`])
                .expect(200, done);
        });

        it("with user returns 200", (done) => {
            request(app).get('/company')
                .set('Cookie', [`_session=${authHelper.generateUserToken()}`])
                .expect(200, done);
        });
    })
});