'use strict';

module.exports = function bootstrapColumn() {
    return function (datasetLength) {
        return Math.floor(12 / datasetLength);
    };
};