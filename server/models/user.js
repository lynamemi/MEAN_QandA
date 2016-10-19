var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: {
		type: String,
		trim: true
	},
	_questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
	_answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
	}, {timestamps: true
});

mongoose.model('User', UserSchema);