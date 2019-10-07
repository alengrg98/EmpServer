var mongo = require('mongoose');

var schema = mongo.Schema;

var employeeSchema = new schema({
    eid   : String,
    fname : String,
    lname : String,
    phone : Number,
    email : String,
    gender: String,
    employment : String,
    dept : String,
    post : String,
    joindate : Date,
    dob : Date
});

var employeeModel = mongo.model("employees", employeeSchema);

module.exports = employeeModel;