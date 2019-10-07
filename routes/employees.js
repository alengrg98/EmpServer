var exp = require('express');
const router = exp.Router();
var body = require('body-parser');
router.use(body.urlencoded({extended:true}));
router.use(body.json());

var emp = require('../model/employeemodel');

router.post("/addemp", (req,res)=>{
    var e1 = new emp(req.body);
    e1.save(err => {
        if (err) throw err;
        else res.send({msg:"Created"});
    })
})

router.get("/getemp", (req,res)=>{
    emp.find({}, (err,result) => {
        if (err) throw err;
        else res.send(result);
    })
})

router.get("/getemp/:id", (req,res)=>{
    emp.find({eid: req.params.id}, (err,result) => {
        if (err) throw err;
        else res.send(result);
    })
})

router.post("/editemp", (req,res)=>{
    emp.updateOne({eid: req.body.eid},{$set:{
    eid   : req.body.eid,
    fname : req.body.fname,
    lname : req.body.lname,
    phone : req.body.phone,
    email : req.body.email,
    gender: req.body.gender,
    employment : req.body.employment,
    dept : req.body.dept,
    post : req.body.post,
    joindate : req.body.joindate,
    dob : req.body.dob
    }}, err => {
        if (err) throw err;
        else res.redirect("/emp/getemp");
    })
})

router.get("/deleteemp/:id",(req,res)=>{
    emp.deleteOne({eid: req.params.id}, err => {
        if (err) throw err;
        else res.redirect("/emp/getemp");
    })
})
module.exports = router;