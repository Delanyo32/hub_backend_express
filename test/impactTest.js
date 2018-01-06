let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
var assert = require('chai').assert
var upcommingController = require('../controllers/upcommingController')

chai.use(chaiHttp);

describe('/POST impact', () => {
    it('it should create a new impact point', (done) => {
        chai.request("http://127.0.0.1:3000")
            .post('/api/impact/5a08c3042184a1b35432fa53/5a08c3042184a1b35432fa53')
            .send({
                description: "something big happend",
                lives_affected: 20,
                date: Date.now()
            })
            .end((err, res) => {
                //console.log(res.body)
                if (err) {
                    console.log(err)
                } else {
                    res.should.have.status(200);
                    res.body.status.should.be.eql(true)
                    res.body.data.should.be.a('object');
                    // res.body.data.length.should.not.be.eql(0);
                }
                done();
            });
    });
});