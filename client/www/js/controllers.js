angular.module('fresh')

.controller('MobileCtrl', function($scope,$ionicPopup,$state) {

	$scope.showCheckMark = function (data){
		if(phoneUtils.isValidNumberForRegion(data.number, 'IN')){
			$scope.display = true;
			$scope.error = false;
		} else{
			$scope.error = true;
			$scope.display = false;
		}
	};

	$scope.verify = function(data){
		// var phonenum = /^[789]\d{9}$/;
		// if (phonenum.test(data.number)){
		// 	 $state.go('verify');
		// }
		try{
			if(phoneUtils.isValidNumberForRegion(data.number, 'IN')){
				console.log('yes It worked perfectly');
				$state.go('verify');
			} else{
				var alertPopup = $ionicPopup.alert({
					title: 'Invalid Number',
					template: 'Please check the number you\'ve entered'
				});
			}
		} catch(e){
			var alertPopup = $ionicPopup.alert({
				title: 'Invalid Number',
				template: 'Please check the number you\'ve entered'
			});
		}
		
	};

});
