import { serve } from "https://deno.land/std@0.61.0/http/server.ts";

// import { createRequire } from "https://deno.land/std/node/module.ts";
// const require = createRequire(import.meta.url);
import { say } from '../pkg/hello_lib.js';

type Resp = {
    body: string;
}

const s = serve({ port: 3000 });
console.log("http://localhost:3000/");
for await (const req of s) {
  let r = {} as Resp;
  r.body = say (" World\n");
  req.respond(r);
}
