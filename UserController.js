var app = angular.module("app");

app.controller("UserController", function($scope, UserFactory){

  $scope.users = [];
  UserFactory.getUsers(function(data){
    $scope.users = data;
  });

  $scope.addNew = function(){
    closeEdit();
    UserFactory.addNew($scope.newUser);
    $scope.newUser = "";
  };

  $scope.delete = function(user) {
    closeEdit();
    UserFactory.delete(user);
  };

  $scope.update = function(user, index) {
    UserFactory.update(user, index);
    $scope.edit[index] = false;
    UserFactory.getUsers(function(data){
      $scope.users = data;
    });
  };


  $scope.edit = function(index){
    var length = $scope.users.length;
    $scope.master= angular.copy($scope.users[index]);

    for(var i = 0; i<length;i++){
      if(i != index){
        $scope.edit[i] = false;
      }
    }
    $scope.edit[index] = true;
  };

  $scope.cancelEdit = function(index){
    $scope.edit[index] = false;
  };

  function closeEdit(){
    for(var i = 0; i<$scope.users.length;i++){
        $scope.edit[i] = false;
    }
  }

});
