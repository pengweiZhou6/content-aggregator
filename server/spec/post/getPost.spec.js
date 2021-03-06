const app = require('../../app');
const request = require('supertest');
const authHelper = require('../helpers/authHelper');

describe('GET /post', () => {

    describe('test auth', () => {
        it("without auth throws 401", (done) => {
            request(app).get('/post')
                .expect(401, done);
        });

        it("with admin returns 200", (done) => {
            request(app).get('/post')
                .set('Cookie', [`_session=${authHelper.generateAdminToken()}`])
                .expect(200, done);
        });


        it("with approver returns 200", (done) => {
            request(app).get('/post')
                .set('Cookie', [`_session=${authHelper.generateApproverToken()}`])
                .expect(200, done);
        });

        it("with user returns 200", (done) => {
            request(app).get('/post')
                .set('Cookie', [`_session=${authHelper.generateUserToken()}`])
                .expect(200, done);
        });
    })
});

describe('GET /post/featured', () => {
    describe('test auth', () => {
        it('without auth returns 200', (done) => { 
            request(app).get('/post/featured')
                .expect(200, done);
        })
    });
});