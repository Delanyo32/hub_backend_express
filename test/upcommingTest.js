//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
var assert = require('chai').assert
var upcommingController = require('../controllers/upcommingController')

chai.use(chaiHttp);

describe('test the get upcomming method', () => {
    it('it should try out the method', (done) => {
        var result = upcommingController.dosomething()
        assert.typeOf(result, 'string', "it is not a string")
        done();
    })
})

describe('/GET upcomming', () => {
    it('it should get all the upcommings', (done) => {
        chai.request("http://127.0.0.1:3000")
            .get('/api/upcomming')
            .end((err, res) => {
                //console.log(res.body)
                if (err) {
                    console.log(err)
                } else {
                    res.should.have.status(200);
                    res.body.status.should.be.eql(true)
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.not.be.eql(0);
                }
                done();
            });
    });
});