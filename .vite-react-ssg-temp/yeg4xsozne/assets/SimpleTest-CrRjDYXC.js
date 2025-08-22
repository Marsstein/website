import { jsxs, jsx } from "react/jsx-runtime";
const SimpleTest = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white p-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-blue-600", children: "Simple Test Page Works!" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-4", children: "This is a minimal test page to verify routing works." })
  ] });
};
export {
  SimpleTest as default
};
