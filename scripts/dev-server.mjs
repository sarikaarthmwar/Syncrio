import { createServer } from 'node:http';
import { createReadStream, existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
const root = process.argv[2] || '.';
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.svg':'image/svg+xml' };
createServer((req,res)=>{
  const url = new URL(req.url, 'http://localhost');
  let path = normalize(url.pathname).replace(/^\/+/, '') || 'index.html';
  let file = join(root, path);
  if (!existsSync(file)) file = join(root, 'index.html');
  res.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
  createReadStream(file).on('error',()=>{res.statusCode=404;res.end('Not found')}).pipe(res);
}).listen(process.env.PORT || 4173, '0.0.0.0', () => console.log(`Serving ${root} on http://localhost:${process.env.PORT || 4173}`));
