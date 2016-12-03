function MainController($scope) {
  $scope.military = {
    title: "soldier",
    rank: "captain",
    age: "40 yrs",
    experience: "20 yrs"
  };
}

angular
      .module('app')
      .controller('MainController', MainController);
