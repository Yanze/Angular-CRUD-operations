var app = angular.module("app");

app.factory("UserFactory", function(){
  var users = [
    {firstName: "Lily", lastName: "Smith", favLanguage: "Ruby"},
    {firstName: "Doe", lastName: "Smith", favLanguage: "PHP"}
  ];

  var factory = {};

  factory.getUsers = function(callback) {
    callback(users);
  };

  factory.addNew = function(user) {
    users.push(user);
  };

  factory.delete = function(user){
    users.splice(users.indexOf(user), 1);
  };

  factory.update = function(user, index){
    users[index] = user;
  };

  return factory;
});
