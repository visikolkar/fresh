angular.module('fresh', ['ionic'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
	// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	// for form inputs)
	if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
		cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		cordova.plugins.Keyboard.disableScroll(true);

	}
	if (window.StatusBar) {
		// org.apache.cordova.statusbar required
		StatusBar.styleLightContent();
	}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('mobile', {
		url: '/',
		templateUrl: 'templates/mobile.html',
		controller: 'MobileCtrl'
	})

	.state('verify',{
		url: '/verify',
		templateUrl: 'templates/verify.html'
	})
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/');

});
