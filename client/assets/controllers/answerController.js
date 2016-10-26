app.controller('answerController', ['$scope', 'answerFactory', 'userFactory', 'questionFactory', '$location', '$routeParams', function($scope, answerFactory, userFactory, questionFactory, $location, $routeParams) {

	$scope.create = function() {
		if($scope.answer.answer.length < 5) {
			alert("Answer must be at least 5 characters")
		} else {
			var newAnswer = {name: $scope.currentUser.user.username, _user: $scope.currentUser.user._id, answer: $scope.answer.answer, details: $scope.answer.details, _question: $routeParams._id}
			answerFactory.create(newAnswer, function(returnedData){
				if(returnedData.error){
					$scope.errors = returnedData.error
				} else {
					$scope.answer = returnedData.answer
				}
				$scope.answer = {};
				$location.url('/')
			})
		}
	}

	$scope.clear = function() {
		$scope.answer = {};
	}

	userFactory.checkUserStatus(function(returnedData) {
		$scope.currentUser = returnedData;
		if(!$scope.currentUser.user) {
			$location.url('/index')
		}
	})

	questionFactory.show($routeParams._id, function(returnedData){
		$scope.question = returnedData.data.question
	})

}]);