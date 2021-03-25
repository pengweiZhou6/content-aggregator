const app = require('../../app');
const request = require('supertest');
const authHelper = require('../helpers/authHelper');

describe('GET /user', () => {

    describe('test auth', () => {
        it("without auth throws 401", (done) => {
            request(app).get('/user')
                .expect(401, done);
        });

        it("with admin returns 200", (done) => {
            request(app).get('/user')
                .set('Cookie', [`_session=${authHelper.generateAdminToken()}`])
                .expect(200, done);
        });


        it("with approver returns 403", (done) => {
            request(app).get('/user')
                .set('Cookie', [`_session=${authHelper.generateApproverToken()}`])
                .expect(403, done);
        });

        it("with user returns 403", (done) => {
            request(app).get('/user')
                .set('Cookie', [`_session=${authHelper.generateUserToken()}`])
                .expect(403, done);
        });
    })
});