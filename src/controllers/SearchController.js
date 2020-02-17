const Dev = require('../models/Dev');
const parseStringToArray = require('../utils/parseStringsAsArray');

module.exports = {
  async index(req, res) {
    // buscar todos os devs num raio de 10km
    const { latitude, longitude, techs } = req.query;
    const techsArray = parseStringToArray(techs);
    const devs = await Dev.find({
      techs: {
        $in: techsArray // operador logico no mongo
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000,
        }
      }
    });
    return res.json(devs)
  }
}