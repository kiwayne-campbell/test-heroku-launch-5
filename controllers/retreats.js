const Retreat = require('../models/retreat');

function retreatsIndex(req, res) {
  Retreat.find((err, retreats) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(retreats);
  });
}

function retreatsCreate(req, res) {
  Retreat.create(req.body, (err, retreat) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(retreat);
  });
}

function retreatsShow(req, res) {
  Retreat.findById(req.params.id, (err, retreat) => {
    if(err) return res.status(500).json({ error: err });
    if(!retreat) return res.status(404).json({ error: 'Not found' });
    return res.json(retreat);
  });
}

function retreatsUpdate(req, res) {
  Retreat.findById(req.params.id, (err, retreat) => {
    if(err) return res.status(500).json({ error: err });
    if(!retreat) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      retreat[key] = req.body[key];
    }

    retreat.save((err, retreat) => {
      if(err) return res.status(400).json({ error: err });
      res.json(retreat);
    });
  });
}

function retreatsDelete(req, res) {
  Retreat.findById(req.params.id, (err, retreat) => {
    if(err) return res.status(500).json({ error: err });
    if(!retreat) return res.status(404).json({ error: 'Not found' });

    retreat.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: retreatsIndex,
  create: retreatsCreate,
  show: retreatsShow,
  update: retreatsUpdate,
  delete: retreatsDelete
};
