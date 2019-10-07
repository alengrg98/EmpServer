var mongo = require('mongoose');

var schema = mongo.Schema;

var userSchema = new schema({
    username: String,
    password: String
});

var usersModel = mongo.model("users", userSchema);

module.exports = usersModel;