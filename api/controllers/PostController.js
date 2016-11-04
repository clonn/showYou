/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: async (req, res) => {
    try {
      let user = req.user;
      let param = {
        title: req.body.title,
        describe: req.body.describe,
        videoUrl: req.body.videoUrl
      };

      let post = await Post.create(param);
      await post.setUser(user.id);
      return res.json({
        status: 'ok',
        body: {
          id: post.id
        }
      })
    } catch (e) {
      return res.serverError(e);
    }
    return res.json('welcome');
  }
};
