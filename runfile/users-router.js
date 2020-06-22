const router = require("express").Router();

const Users = require("./users-model");

const restricted = require("./authenticate-middleware");

router.get("/", restricted, checkdepartment("admin"),
 (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json({ users, decodedToken: req.decodedToken });
    })
    .catch((err) => res.send(err));
});

function checkdepartment(userpermisions) {
 console.log(userpermisions[0].name)    
  return (req, res, next) => {

     // console.log(req)
    if (req.decodedToken.userpermisions[0].name == userpermisions) {
       
      next();
    } else {
      res.status(403).json({ message: "You shall not pass! you are wrong department1" });
    }
  };
}

module.exports = router;