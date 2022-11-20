let database = [];
let nextId = 1;

const createVehicle = function (req, res) {
  let id = nextId;
  nextId++;
  let year = req.body.year;
  let make = req.body.make;
  let model = req.body.model;
  let element = {
    id: id,
    year: year,
    make: make,
    model: model,
  };
  database.push(element);
  res.sendStatus(204);
};

const getVehicle = function (req, res) {
  let id = req.body.id;
  let matchingItem;
  for (let i = 0; i < database.length; i++) {
    if (id == database[i].id) {
      matchingItem = database[i];
      break;
    }
  }
  res.send(database);
};

const getVehicles = function (req, res) {
  res.send(database);
};

module.exports = {
  createVehicle,
  getVehicle,
  getVehicles,
};
