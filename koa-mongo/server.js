
/**
 * Module dependencies.
 */

const now = require('performance-now');
const mongo = require('koa-mongo');
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  const start = now();
  let cpu = process.cpuUsage();

  await next();

  cpu = process.cpuUsage(cpu);

  ctx.set('X-Response-Time', `${now() - start}`);

  ctx.set('Server-Timing', `
	  db=0.1; "Total MongoDB",
	  cpu=${cpu.user + cpu.system}; "Total CPU"
	`.replace(/\n|\s{2}/g, ''));
})

app.use(mongo({
   host: process.env.MONGO_HOST,
   port: process.env.MONGO_PORT,
   db: process.env.MONGO_DB,
}));

app.use(async (ctx, next) => {
  const start = now();

  await next();

  ctx.mongo.db(process.env.MONGO_DB).collection(process.env.MONGO_ACCESS)
  .insert({
    method: ctx.method,
    url: ctx.url,
    origin: ctx.origin,
    query: ctx.query,
    ip: ctx.ip,
    status: ctx.status,
    time: now() - start,
  });
});

app.use(ctx => {
  ctx.status = 200;
  ctx.body = 'Hello, World!';
});

app.listen(process.env.PORT);

console.log('Listening on port ', process.env.PORT);
