import { T as TSS_SERVER_FUNCTION, c as createServerFn } from "./server-DkyGmCH3.mjs";
import { g as getSession } from "./session-DiUO9xOm.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const checkSession_createServerFn_handler = createServerRpc({
  id: "f98cc289e24012ae518ca8d45587a54ab715cd67138b8db7ad8200f169da4cc0",
  name: "checkSession",
  filename: "src/routes/admin.tsx"
}, (opts) => checkSession.__executeServer(opts));
const checkSession = createServerFn({
  method: "GET"
}).handler(checkSession_createServerFn_handler, async () => {
  const {
    getRequest
  } = await import("./server-DkyGmCH3.mjs").then(function(n) {
    return n.b;
  });
  const req = getRequest();
  const loggedIn = req ? !!await getSession(req) : false;
  return {
    loggedIn
  };
});
export {
  checkSession_createServerFn_handler
};
