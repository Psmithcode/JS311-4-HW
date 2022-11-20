let database = [];
let nextId = 1;

const createComment = function (req, res) {
  let body = req.body;
  let id = nextId;
  nextId++;
  let comment = body.comment;
  let element = {
    id: id,
    comment: comment,
  };
  database.push(element);
  res.sendStatus(204);
};
const findComment = function (req, res) {
  res.send("not yet implemented");
};
const listComments = function (req, res) {
  res.send(database);
};

module.exports = {
  createComment,
  findComment,
  listComments,
};
