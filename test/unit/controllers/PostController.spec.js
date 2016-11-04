import {login} from '../../resources/login.helper';

describe('PostController', async (done) => {

  before( async (done) => {
    try {
      await login();
      done();
    } catch (e) {
      return done(e);
    }  
  });

  it('craete post from user', async (done) => {
    try {
      let param  = {
        title: 'test video',
        describe: 'test describe content',
        videoUrl: 'https://www.youtube.com/watch?v=HFlgNoUsr4k'
      };

      let result = await request(sails.hooks.http.app)
      .post('/api/post/create')
      .send(param)
      .set('cookie', global.userCookie)
      result.statusCode.should.be.equal(200);

      result.body.should.be.include.keys(['status', 'body']);
      console.log(result.body);
      return done();
    } catch (e) {
      return done(e);
    }
  });
});