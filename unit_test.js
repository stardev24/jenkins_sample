var superagent = require('superagent');
var res = {data:"Testing for mocha"}
describe('homepage', function(){
  it('should respond to GET',function(done){
    superagent
      .get('http://echo.jsontest.com/key/value/one/two')
      .end(function(err,res){
        console.log("getting success response >>",res.body);
        done();
    })
  })
 });