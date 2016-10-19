app.controller('questionController', ['$scope', 'questionFactory', 'userFactory', 'answerFactory', '$location', '$routeParams', function($scope, questionFactory, userFactory, answerFactory, $location, $routeParams) {

	$scope.create = function() {
		if(!$scope.question.question || $scope.question.question.length < 10) {
			alert("Question must be at least 10 characters")
		} else {
			var newQuestion = {name: $scope.currentUser.user.username, _user: $scope.currentUser.user._id, question: $scope.question.question, description: $scope.question.description}
			questionFactory.create(newQuestion, function(returnedData){
				if(returnedData.error){
					$scope.errors = returnedData.error
				} else {
					$scope.question = returnedData.question
				}
				$scope.question = {};
				$location.url('/')
			})
		}
	}

	$scope.clear = function() {
		$scope.question = {};
	}

	var index = function() {
		questionFactory.index(function(returnedData){
			$scope.questions = returnedData.questions;
		})
	}
	index();

	var show = function() {
		questionFactory.show($routeParams._id, function(returnedData){
			$scope.question = returnedData.data.question
		})
	}
	show()

	userFactory.checkUserStatus(function(returnedData) {
		$scope.currentUser = returnedData;
		if(!$scope.currentUser.user) {
			$location.url('/index')
		}
	})

	$scope.update = function(answer) {
		answerFactory.update(answer._id, show())
	}

}]);