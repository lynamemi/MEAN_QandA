app.factory('questionFactory', ['$http', function($http) {
	var questions = [];
	var question = {};
	function QuestionFactory() {
		this.create = function(question, callback) {
			$http.post('/questions', question).then(function(returnedData) {
				if (typeof(callback) == 'function') {
					callback(returnedData.data);
				}
			})
		}
		this.index = function(callback) {
			$http.get('/questions').then(function(returnedData) {
				if (typeof(callback) == 'function') {
					callback(returnedData.data);
				}
			});
		};
		this.show = function(id, callback) {
			$http.get('/questions/'+id).then(function(returnedData){
				if (typeof(callback) == 'function') {
					callback(returnedData);
				}
			})
		}
	}
	return new QuestionFactory();
}]);