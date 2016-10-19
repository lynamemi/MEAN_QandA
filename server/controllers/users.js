var mongoose = require('mongoose');

var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

function UserController() {
	this.login = function(req, res) {
		User.findOne({username: req.body.username}, function(err, user) {
			if(!user) {
				var user = new User(req.body)
				user.save(function(err, data) {
					if (err) {
						return res.json({status:false})
					} else {
						req.session.user = user
						req.session.save()
						return res.json({status:true, user:user})
					}
				})
			}
			else if(err) {
				res.json({error:err})
			} else {
				req.session.user = user
				req.session.save()
				return res.json({status:true, user:user})
			}
		})
	}
	this.session = function(req, res) {
		if(req.session.user) {
			res.json({user:req.session.user})
		} else {
			res.json({user:null})
		}
	}
	this.logout = function(req, res) {
		req.session.destroy();
		res.redirect('/index');
	}
}

module.exports = new UserController();