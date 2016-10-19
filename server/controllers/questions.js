var mongoose = require('mongoose');

var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

function QuestionController() {
	this.create = function(req, res) {
		User.findOne({_id: req.session.user._id}, function(err, user) {
			var question = new Question(req.body)
			question.save(function(err, question) {
				if (err) {
					res.json({error:err});
				} else {
					user._questions.push(question);
					user.save(function(err) {
						if(err) {
							res.json({error:err})
						} else {
							res.json({question:question})
						}
					})
				}
			})
		})
	}
	this.show = function(req, res) {
		Question.findOne({_id: req.params.id}).populate('_answers').exec(function(err, question){
			if(err){
				res.json({error:err})
			} else {
				res.json({question:question})
			}
		})
	}
	this.index = function(req, res) {
		Question.find({}, function(err, questions){
			if(err){
				res.json({error:err})
			} else {
				res.json({questions:questions})
			}
		})
	}
}

module.exports = new QuestionController();