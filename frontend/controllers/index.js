const router = require('koa-simple-router');

const IndexController = require('./IndexController');

const indexController = new IndexController();

module.exports = app => {
  app.use(
    router(_ => {
      _.get(['/', '/index'], indexController.actionIndex());
      _.get('/index/data', indexController.actionData());
    })
  );
};
