
/**
 * Module dependencies.
 */

const path = require('path');
const now = require('performance-now');
const serve = require('koa-static');
const mongo = require('koa-mongo');
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  const startTime = now();
  const startUsage = process.cpuUsage();
  await next();
  const cpuUsage = process.cpuUsage(startUsage);
  ctx.set('X-Response-Time', `${now() - startTime}`);
  ctx.set('Server-Timing', `
	  db=0.1; "Total MongoDB",
	  cpu=${cpuUsage.user + cpuUsage.system}; "Total CPU"
	`.replace(/\n|\s{2}/g, ''));
})

app.use(mongo({
   host: process.env.MONGO_HOST,
   port: process.env.MONGO_PORT,
   db: process.env.MONGO_DB,
}));

app.use(async (ctx, next) => {
  const startTime = now();
  await next();
  ctx.mongo.db(process.env.MONGO_DB).collection('access').insertOne({
    method: ctx.method,
    url: ctx.url,
    origin: ctx.origin,
    query: ctx.query,
    ip: ctx.ip,
    status: ctx.status,

    time: now() - startTime,
  });

});

app.use(serve(path.resolve(__dirname, 'public')));

app.listen(process.env.PORT);

console.log('Listening on port ', process.env.PORT);
