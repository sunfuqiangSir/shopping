app.factory("shopServer",["$http","$q",function($http,$q){
    var obj={
        ajax:function(style,url){
            var defer = $q.defer();
            $http({
                url:url,
                method:style
            }).then(function(res){
                defer.resolve(res)
            },function(err){
                defer.reject(err);
            });
            return defer.promise;
        }
    };
    return obj
}]);