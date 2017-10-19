app.controller("shopController",["$scope","shopServer",function($scope,shopServer){
    shopServer.ajax("get","Data/shoppingData.json").then(function(data){
        console.log(data);
        $scope.objs = data.data
    })
}]);