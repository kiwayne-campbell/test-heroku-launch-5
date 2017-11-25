const Picture = require('../models/picture');

function picturesIndex(req, res) {
  Picture.find((err, pictures) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(pictures);
  });
}

function picturesCreate(req, res) {
  Picture.create(req.body, (err, picture) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(picture);
  });
}

function picturesShow(req, res) {
  Picture.findById(req.params.id, (err, picture) => {
    if(err) return res.status(500).json({ error: err });
    if(!picture) return res.status(404).json({ error: 'Not found' });
    return res.json(picture);
  });
}

function picturesUpdate(req, res) {
  Picture.findById(req.params.id, (err, picture) => {
    if(err) return res.status(500).json({ error: err });
    if(!picture) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      picture[key] = req.body[key];
    }

    picture.save((err, picture) => {
      if(err) return res.status(400).json({ error: err });
      res.json(picture);
    });
  });
}

function picturesDelete(req, res) {
  Picture.findById(req.params.id, (err, picture) => {
    if(err) return res.status(500).json({ error: err });
    if(!picture) return res.status(404).json({ error: 'Not found' });

    picture.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: picturesIndex,
  create: picturesCreate,
  show: picturesShow,
  update: picturesUpdate,
  delete: picturesDelete
};
