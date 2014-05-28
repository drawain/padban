"use strict";

module.exports = ['$scope', function TreesCtrl($scope) {
    $scope.remove = (scope) => scope.remove();
    $scope.toggle = (scope) => scope.toggle();

    $scope.newSubItem = (scope) => {
        var nodeData = scope.$modelValue,
            nodes = nodeData.nodes || nodeData;

        nodes.push({
            id: nodes.length + 1,
            title: (nodeData.title || 'Alma') + '.' + (nodes.length + 1),
            nodes: []
        });
    };

    $scope.tree1 = [
        { "id": 1, "title": "tree1 - item1", "nodes": []},
        { "id": 2, "title": "tree1 - item2", "nodes": []},
        { "id": 3, "title": "tree1 - item3", "nodes": []},
        { "id": 4, "title": "tree1 - item4", "nodes": []}
    ];

    $scope.tree2 = [
        { "id": 1, "title": "tree2 - item1", "nodes": []},
        { "id": 2, "title": "tree2 - item2", "nodes": []},
        { "id": 3, "title": "tree2 - item3", "nodes": []},
        { "id": 4, "title": "tree2 - item4", "nodes": []}
    ];
}];