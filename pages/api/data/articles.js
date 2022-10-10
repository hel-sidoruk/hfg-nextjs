const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
const { Articles } = require('../models/models');

class ArticleController {
  async create(req, res, next) {
    try {
      let { title, descr, text } = req.body;
      const { image } = req.files;
      const filename = `${uuid.v4()}.jpg`;
      image.mv(path.resolve(__dirname, '..', 'assets', filename));

      const article = await Articles.create({
        title,
        descr,
        text,
        image: filename,
      });
      res.json(article);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { page, limit } = req.query;
    page = page || 1;
    limit = limit || 6;
    const offset = page * limit - limit;
    let articles = await Articles.findAndCountAll({
      order: [['createdAt', 'DESC']],
      limit,
      offset,
    });
    return res.json(articles);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const article = await Articles.findOne({
      where: { id },
    });
    return res.json(article);
  }
}

module.exports = new ArticleController();
