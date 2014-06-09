"use strict";

module.exports = ['$scope', '$http', '$interval', function BoardCtrl($scope, $http, $interval) {
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
            $draggingElement.css({width: $placeholder.outerWidth() + 'px'});
        }
    };

    $http.get('/api/board').success(function (board) {
        $scope.board = board;
    });

    $scope.progress = {
        label: '100%',
        percentage: 0.15
    };

    $interval(function() {
        $scope.progress.percentage += 0.1;

    }, 1000);

    $scope.getImg = function() {
        var img = ['draven.jpeg', 'bilbo.jpg', 'gates.jpg', 'morgan.jpg'];
        return img[Math.floor(Math.random() * img.length)];
    };

}];