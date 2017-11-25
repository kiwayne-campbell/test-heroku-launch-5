const Blog = require('../models/blog');

function blogsIndex(req, res) {
  Blog.find((err, blogs) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(blogs);
  });
}

function blogsCreate(req, res) {
  Blog.create(req.body, (err, blog) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(blog);
  });
}

function blogsShow(req, res) {
  Blog.findById(req.params.id, (err, blog) => {
    if(err) return res.status(500).json({ error: err });
    if(!blog) return res.status(404).json({ error: 'Not found' });
    return res.json(blog);
  });
}

function blogsUpdate(req, res) {
  Blog.findById(req.params.id, (err, blog) => {
    if(err) return res.status(500).json({ error: err });
    if(!blog) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      blog[key] = req.body[key];
    }

    blog.save((err, blog) => {
      if(err) return res.status(400).json({ error: err });
      res.json(blog);
    });
  });
}

function blogsDelete(req, res) {
  Blog.findById(req.params.id, (err, blog) => {
    if(err) return res.status(500).json({ error: err });
    if(!blog) return res.status(404).json({ error: 'Not found' });

    blog.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: blogsIndex,
  create: blogsCreate,
  show: blogsShow,
  update: blogsUpdate,
  delete: blogsDelete
};
