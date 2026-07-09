var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function SmartLink({
  to,
  className,
  children
}) {
  const isInternal = to.startsWith("/");
  if (isInternal) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className, "data-tsd-source": "/src/components/smart-link.tsx:22:7", children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: to, target: "_blank", rel: "noreferrer noopener", className, "data-tsd-source": "/src/components/smart-link.tsx:29:5", children });
}
__name(SmartLink, "SmartLink");
__name2(SmartLink, "SmartLink");
export {
  SmartLink as S
};
