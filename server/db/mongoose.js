var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin123@ds153413.mlab.com:53413/todoapp' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};