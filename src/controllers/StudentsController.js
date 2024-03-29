const Student = require("../models/student");

class StudentsController {
  getAll(req, res, next) {
    Student.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }

  get(req, res, next) {
    let { id } = req.params;
    Student.findById(id, (err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }

  post(req, res, next) {
    let body = req.body;
    let student = new Student({
      username: req.body.username,
      name: req.body.name,
      image: req.file.path,
    });
    student.save((err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }

  put(req, res, next) {
    let { id } = req.params;
    let body = req.body;
    Student.updateOne(
      { _id: id },
      {
        $set: body,
      },
      (err, response) => {
        if (err) return next(err);
        res.status(200).send(response);
      }
    );
  }

  delete(req, res, next) {
    let { id } = req.params;
    User.deleteOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }
}

const studentsController = new StudentsController();
module.exports = studentsController;
