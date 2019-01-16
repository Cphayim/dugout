const Koa = require('koa');
const KoaRouter = require('koa-simple-router');

const app = new Koa();

require('./controllers')(app);

app.listen(3000, () => console.log('Server is running!🍺'));
