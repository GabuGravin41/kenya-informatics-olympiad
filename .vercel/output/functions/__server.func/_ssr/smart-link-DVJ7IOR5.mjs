import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
function SmartLink({
  to,
  className,
  children
}) {
  const isInternal = to.startsWith("/");
  if (isInternal) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className, children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: to, target: "_blank", rel: "noreferrer noopener", className, children });
}
export {
  SmartLink as S
};
