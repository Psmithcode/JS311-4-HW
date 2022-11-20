let nextId = 1;
let database = [];

const makeProduct = function (req, res) {
  let id = nextId;
  nextId++;
  let name = req.body.name;
  let description = req.body.description;
  let element = {
    id: id,
    name: name,
    description: description,
  };
  database.push(element);
  res.sendStatus(204);
};

const getProducts = function (req, res) {
  res.send(database);
};
const getProduct = function (req, res) {
  let id = req.params.id;
  let matchingItem;
  for (let i = 0; i < database.length; i++) {
    if (id == database[i].id) {
      matchingItem = database[i];
      break;
    }
  }
  res.send(matchingItem);
};

module.exports = {
  makeProduct,
  getProduct,
  getProducts,
};
