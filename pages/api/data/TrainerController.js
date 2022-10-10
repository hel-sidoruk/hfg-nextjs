const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
const { Trainers } = require('../models/models');

class TrainerController {
  async create(req, res, next) {
    try {
      let { name, disciplines, text } = req.body;
      const { image } = req.files;
      const filename = `${uuid.v4()}.jpg`;
      image.mv(path.resolve(__dirname, '..', 'assets', filename));

      const trainer = await Trainers.create({
        name,
        disciplines,
        text,
        image: filename,
      });
      res.json(trainer);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let trainers = await Trainers.findAll({ order: [['createdAt']] });
    return res.json(trainers);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const trainer = await Trainers.findOne({
      where: { id },
    });
    return res.json(trainer);
  }
}

module.exports = new TrainerController();
