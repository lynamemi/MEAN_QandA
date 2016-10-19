var mongoose = require('mongoose');

var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

function AnswerController() {
	this.create = function(req, res) {
		var answer = new Answer(req.body)
		User.findOne({_id: req.session.user._id}, function(err, user) {
			Question.findOne({_id: answer._question}, function (err, question) {
				answer.save(function(err, answer) {
					if (err) {
						res.json({error:err});
					} else {
						user._answers.push(answer);
						question._answers.push(answer);
						user.save(function(err) {
							if(err) {
								res.json({error:err})
							} else {
								question.save(function(err) {
									if(err){
										res.json({error:err})
									} else {
										res.json({answer:answer})
									}
								})
								
							}
						})
					}
				})
			})
		})
	}
	this.update = function(req, res) {
		Answer.findByIdAndUpdate({_id: req.params.id}, {$inc: {likes: 1}}, function(err, answer) {
			if(err){
				res.json({error:err})
			} else {
				res.json({answer: answer})
			}
		})
	}
}

module.exports = new AnswerController();