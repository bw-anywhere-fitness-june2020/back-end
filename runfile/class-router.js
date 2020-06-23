const router = require("express").Router();

const Classes = require("./class-model");
const authenticate = require('./authenticate-middleware');


router.get("/", //authenticate, checkdepartment(23412),
 (req, res) => {
  Classes.findclass()
      .then((classes) => {
        res.status(200).json({ classes, decodedToken: req.decodedToken });
      })
      .catch((err) => res.send(err));
  });

  router.post("/", authenticate, checkdepartment(23412),
  (req, res) => {
    Classes.insert(req.body)
        .then(classes => {
            res.status(201).json(classes);
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
});


router.delete("/:id", authenticate, checkdepartment(23412),
 (req, res) => {
    const { id } = req.params;
    Classes.remove(id)
    .then((classes) => {
        if (!classes) {
          res.status(404).json({
            message: "The user with the specified ID does not exist.",
          });
        } else {
          res.status(200).json(classes);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
        res.status(500).json({ errorMessage: "The user could not be removed" });
      });
  });

  router.put("/:id", //authenticate, checkdepartment(23412),
   (req, res) => {
    Classes.update(req.params.id, req.body)
      .then(classes => {
        if (classes) {
          res.status(200).json(classes);
        } else {
          res.status(404).json({ message: "The hub could not be found" });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: "Error updating the hub",
        });
      });
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