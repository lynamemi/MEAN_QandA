app.factory('answerFactory', ['$http', function($http) {
	var answers = [];
	var answer = {};
	function AnswerFactory() {
		this.create = function(answer, callback) {
			$http.post('/answers', answer).then(function(returnedData) {
				if (typeof(callback) == 'function') {
					callback(returnedData.data);
				}
			})
		}
		this.update = function(id, callback) {
			$http.put('/answers/'+id).then(function(returnedData) {
				if (typeof(callback) == 'function') {
					callback(returnedData.data);
				}
			})
		}
	}
	return new AnswerFactory();
}]);