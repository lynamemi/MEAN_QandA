var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
	answer: { type: String, required: true },
	details: { type: String},
	name: { type: String, required: true },
	likes: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: 'User'},
	_question: { type: Schema.Types.ObjectId, ref: 'Question'}},
	{ timestamps: true}
);

mongoose.model('Answer', answerSchema);
