const router = require("express").Router();

const Users = require("./users-model");

const restricted = require("./authenticate-middleware");

router.get("/", restricted, checkdepartment(23412),
 (req, res) => {
     console.log(req.decodedToken )
  Users.find()
    .then((users) => {
      res.status(200).json({ users, decodedToken: req.decodedToken });
    })
    .catch((err) => res.send(err));
});

function checkdepartment(varabel) {
   
  return (req, res, next) => {
      console.log(req.decodedToken.userpermisions)
    if (req.decodedToken.userpermisions === varabel) {
       
      next();
    } else {
      res.status(403).json({ message: "You shall not pass! you are wrong department1" });
    }
  };
}

module.exports = router;