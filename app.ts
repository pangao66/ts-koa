// import 'ts-node/register';
import './src/server'
import Koa from 'koa'

const app = new Koa();
app.use(async (ctx: any) => {
  ctx.body = 'Hello World';
});
app.listen(3008);
console.log('aaa')
