app.controller('userController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, $routeParams) {

	$scope.login = function() {
		if(!$scope.username || $scope.username.length < 3 || $scope.username == "") {
			alert("Name must be at least 3 characters")
		} else {
			var newUser = {username: $scope.username}
			userFactory.login(newUser, function(returnedData) {
				$scope.username = returnedData.user.username
				if(returnedData.status) {
					$location.url('/')
				} else {
					alert("Not successfully logged in")
				}
			})
		}
	}

	userFactory.checkUserStatus(function(returnedData) {
		$scope.currentUser = returnedData;
		if(!$scope.currentUser.user) {
			$location.url('/index')
		}
	})

}]);