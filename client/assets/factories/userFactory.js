app.factory('userFactory', ['$http', function($http) {
	var users = [];
	var user = {};
	function UserFactory() {
		this.login = function(user, callback) {
			$http.post('/login', user).then(function(returnedData) {
				if (typeof(callback) == 'function') {
					callback(returnedData.data);
				}
			})
		}
		this.checkUserStatus = function(callback) {
			$http.get('/session').then(function(returnedData){
				if (typeof(callback) == 'function') {
					callback(returnedData.data);
				}
			})
		}
	}
	return new UserFactory();
}]);