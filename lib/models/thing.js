"use strict";

var Thing = function(dataObject) {
    this.name = dataObject.name;
    this.info = dataObject.info;
    this.awesomeness = dataObject.awesomeness;
};

Thing.prototype = {
    getName: function() {
        return 'Mr. ' + this.name;
    }
};

Thing.createFromArray = function(dataObjects) {
    return dataObjects.map(function(dataObject) {
        return new Thing(dataObject);
    });
};

module.exports = Thing;