"use strict";

module.exports = ['$scope', '$http', function BoardCtrl($scope, $http) {
    $scope.treeOptions = {
        accept: function (sourceNode, destinationNodes) {
            var sourceType = sourceNode.$element.data('type');
            var destinationType = destinationNodes.$element.data('type');

            return (sourceType === destinationType);
        },
        
        dragStart: function(event) {
            var $placeholder = event.elements.placeholder,
                $draggingElement = event.source.nodeScope.$element;

            $placeholder.addClass($draggingElement.attr('class'));
        } 
    };

    $http.get('/api/board').success(function (board) {
        $scope.board = board;
    });
}];