fresh = angular.module('fresh');

fresh.controller('MobileCtrl', function($scope,$ionicPopup,$state) {
  //$scope.data = {};
  $scope.verify = function(data){
    // var phonenum = /^[789]\d{9}$/;
    // if (phonenum.test(data.number)){
    //   $state.go('verify');
    // }
    if(phoneUtils.isValidNumberForRegion(data.number, 'IN')){
      console.log('yes It worked perfectly');
      $scope.display = true;
      $state.go('verify');
    }
    else{
      var alertPopup = $ionicPopup.alert({
        title: 'Invalid Number',
        template: 'Please check the number you\'ve entered'
      });
    }
  };

});
