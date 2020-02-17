const Dev = require('../models/Dev');
const axios = require('axios');

module.exports = {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    const techsArray = techs.split(',').map(tech => tech.trim());

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(`https://api.github.com/users/${github_username}`);
      let { name, avatar_url, bio } = response.data;
      if (!name) { name = response.data.login; };
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }
      // add user in db
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      })
    }
    res.json(dev)
  },

  async index(req, res) {
    const dev = await Dev.find();
    return res.json(dev)
  }
}