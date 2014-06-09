'use strict';

require('../../../../client/scripts/app');

describe('Filter: bootstrapColumn', function () {

    var angular = require('angular'),
        bootstrapColumn;

    beforeEach(angular.mock.module('padbanApp'));

    beforeEach(inject(function ($filter) {
        bootstrapColumn = $filter('bootstrapColumn');
    }));

    it('should return the bootstrap column identifier for the given dataset length', function () {
        expect(bootstrapColumn(12)).toBe(1);
        expect(bootstrapColumn(6)).toBe(2);
        expect(bootstrapColumn(4)).toBe(3);
        expect(bootstrapColumn(2)).toBe(6);
        expect(bootstrapColumn(1)).toBe(12);
    });

    it('should return a valid bootstrap column identifier for a dataset length which is cannot be divided by 12', function () {
        expect(bootstrapColumn(5)).toBe(2);
    });
});