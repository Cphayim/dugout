class IndexController {
  constructor() {}

  actionIndex() {
    return (ctx, next) => {
      ctx.body = 'Hello world';
    };
  }
  actionData() {
    return (ctx, next) => {
      ctx.body = {
        result: 1,
        data: {
          message: 'Hello world!'
        }
      };
    };
  }
}

module.exports = IndexController;
