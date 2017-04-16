
/**
 * Module dependencies.
 */

const mongo = require('koa-mongo');
const Koa = require('koa');

const app = new Koa();

app.use(mongo({
   host: process.env.MONGO_HOST,
   port: process.env.MONGO_PORT,
   db: process.env.MONGO_DB,
}));

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  await ctx.mongo.db('test').collection('access').insert({
    request: {
      headers: ctx.request.header,
      method: ctx.request.method,
      length: ctx.request.length,
      url: ctx.request.url,
      originalUrl: ctx.request.originalUrl,
      origin: ctx.request.origin,
      path: ctx.request.path,
      type: ctx.request.type,
      charset: ctx.request.charset,
      query: ctx.request.query,
      ip: ctx.request.ip,
    },
    response: {
      headers: ctx.response.header,
      status: ctx.response.status,
      length: ctx.response.length,
      type: ctx.response.type,
    },
    time: new Date() - start,
  });

  ctx.body = await ctx.mongo.db('test').collection('access').find().toArray();
});

app.listen(process.env.PORT);

console.log('Listening on port ', process.env.PORT);
