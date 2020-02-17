const { Router } = require('express');
const Dev = require('./models/Dev');
const axios = require('axios');

const routes = Router();

routes.get('/devs', async (req, res) => {
  const { github_username, techs } = req.body;
  const techsArray = techs.split(',').map(tech => tech.trim());

  const response = await axios.get(`https://api.github.com/users/${github_username}`);
  let { name, avatar_url, bio } = response.data;
  if (!name) { name = response.data.login; };

  // add user in db
  const dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray
  })

  res.json(dev)
});

module.exports = routes;