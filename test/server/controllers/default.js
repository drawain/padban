"use strict";

var app = require('../../../server/app');
var request = require('supertest').agent(app.listen());

describe('Simple request test', function(){
  describe('GET /printTest', function(){
      it('should work', function(done){
        request
            .get('/printTest')
            .expect(200)
            .expect('Hello Test!', done);
      });
  });
});