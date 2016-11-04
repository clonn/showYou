// var superagent = require('superagent');
var theAccount = {
  "username": "user",
  "password": "1234"
};

exports.login = async function () {
  let res = await request(sails.hooks.http.app)
      .post('/auth/local/login')
      .send(theAccount);
  global.userCookie = res.headers['set-cookie'];
  // console.log(cookie);
  return res;
};