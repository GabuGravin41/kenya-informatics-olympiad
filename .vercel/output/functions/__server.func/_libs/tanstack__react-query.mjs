var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "./react.mjs";
var QueryClientContext = reactExports.createContext(
  void 0
);
var QueryClientProvider = /* @__PURE__ */ __name(({
  client,
  children
}) => {
  reactExports.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientContext.Provider, { value: client, children });
}, "QueryClientProvider");
export {
  QueryClientProvider as Q
};
