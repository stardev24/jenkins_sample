var superagent = require('superagent');
var res = {data:"Testing for mocha"}
describe('homepage', function(){
  it('should respond to GET',function(done){
    superagent
      .get('http://localhost:'+3000)
      .end(function(res){
        console.log("getting success response >>",res);
        done();
    })
  })
 });