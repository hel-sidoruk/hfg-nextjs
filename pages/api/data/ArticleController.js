import prisma from '../../../lib/prisma';

class ArticleController {
  // async create(req, res, next) {
  //   try {
  //     let { title, descr, text } = req.body;
  //     const { image } = req.files;
  //     const filename = `${uuid.v4()}.jpg`;
  //     image.mv(path.resolve(__dirname, '..', 'assets', filename));

  //     const article = await Articles.create({
  //       title,
  //       descr,
  //       text,
  //       image: filename,
  //     });
  //     res.json(article);
  //   } catch (e) {
  //     next(ApiError.badRequest(e.message));
  //   }
  // }

  async getAll(pageQuery, limitQuery) {
    let page = +pageQuery || 1;
    let limit = +limitQuery || 6;
    const offset = page * limit - limit;
    let articles = await prisma.articles.findMany({
      skip: offset,
      take: limit,
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
    });
    const count = await prisma.articles.count();
    return { articles, count };
  }

  async getOne(id) {
    const article = await prisma.user.findUnique({
      where: { id },
    });
    return article;
  }
}

module.exports = new ArticleController();
