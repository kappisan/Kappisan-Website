var app = angular.module('app', ['ngRoute'])
	.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/home', { templateUrl: 'templates/home.html' })	
			.when('/about', { templateUrl: 'templates/about.html' })
			.when('/services', { templateUrl: 'templates/services.html' })
			.when('/blockchain', { templateUrl: 'templates/blockchain.html' })
			.when('/app_development', { templateUrl: 'templates/app_development.html' })
			.when('/pricing', { templateUrl: 'templates/pricing.html' })
			.when('/justynas_christmas_chaos', { templateUrl: 'templates/justynas_christmas_chaos.html' })
			.otherwise({ redirectTo: '/home' });
	}]);


// CONTROLLERS
app.controller('PageCtrl', ['$scope', '$http', '$location', function($s, $http, $location) {

	console.log("location", $location.$$path);

	$s.changeCurrentPage = function(page) {
		console.log("change", page);

		$('.nav-menu-item').removeClass('active');

		switch(page) {
			case('about'): 
				window.location = "#/about"; 
				$('#nav-menu-about').addClass('active');
				break;
			case('work'): 
				window.location = "#/work_experience"; 
				$('#nav-menu-work').addClass('active');
				break;
			case('skills'): 
				window.location = "#/skills"; 
				$('#nav-menu-skills').addClass('active');
				break;
		}
	}

	$( document ).ready(function() {

		if($location.$$path== "/about") {
			$('#nav-menu-about').addClass('active');
		}
		if($location.$$path== "/work_experience") {
			$('#nav-menu-work').addClass('active');
		}
		if($location.$$path== "/skills") {
			$('#nav-menu-skills').addClass('active');
			console.log("matched");
		}
	});

}]);


