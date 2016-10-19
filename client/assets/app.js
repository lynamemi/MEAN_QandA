var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/index', {
			templateUrl: '/partials/login.html',
			controller: 'userController'
		})
		.when('/', {
			templateUrl: '/partials/dashboard.html',
			controller: 'questionController'
		})
		.when('/new_question', {
			templateUrl: '/partials/new_question.html',
			controller: 'questionController'
		})
		.when('/question/:_id', {
			templateUrl: '/partials/question.html',
			controller: 'questionController'
		})
		.when('/question/:_id/new_answer', {
			templateUrl: '/partials/new_answer.html',
			controller: 'answerController'
		})
		.otherwise({
			redirectTo: '/index'
		})
});