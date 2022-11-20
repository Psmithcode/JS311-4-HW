let database = [];
let nextId = 1;

const getContacts = (req, res) => {
  res.send(database);
};

const getContact = (req, res) => {
  let id = req.params.id;
  let item;
  for (let i = 0; i < database.length; i++) {
    if (id == database[i].id) {
      let item = database[i];
      break;
    }
  }
  res.send(item);
};

const createContact = function (req, res) {
  let payload = req.body;
  let name = payload.name;
  let occupation = payload.occupation;
  let avatar = payload.avatar;
  let id = nextId;
  nextId++;
  let element = {
    id: id,
    name: name,
    occupation: occupation,
    avatar: avatar,
  };
  database.push(element);
  res.sendStatus(204);
};

module.exports = {
  getContact,
  getContacts,
  createContact,
};
