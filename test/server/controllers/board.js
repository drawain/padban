"use strict";

var app = require('../../../server/app');
var request = require('supertest').agent(app.listen());
var mockedBoard = require('../../mocks/board');

describe('Request board', function(){
  describe('GET /board', function(){
      it('should returns the board', function(done){
        request
            .get('/api/board')
            .expect(200)
            .expect(mockedBoard, done);
      });
  });
});