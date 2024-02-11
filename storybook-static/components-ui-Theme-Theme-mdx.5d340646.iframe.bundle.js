(self.webpackChunk_webriq_pagebuilder_site_template_default =
  self.webpackChunk_webriq_pagebuilder_site_template_default || []).push([
  [2238, 4375],
  {
    "./node_modules/@mdx-js/react/lib/index.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        NF: () => withMDXComponents,
        Zo: () => MDXProvider,
        ah: () => useMDXComponents,
        pC: () => MDXContext,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js"
      );
      const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
      function withMDXComponents(Component) {
        return function boundMDXComponent(props) {
          const allComponents = useMDXComponents(props.components);
          return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {
            ...props,
            allComponents,
          });
        };
      }
      function useMDXComponents(components) {
        const contextComponents =
          react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
        return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
          () =>
            "function" == typeof components
              ? components(contextComponents)
              : { ...contextComponents, ...components },
          [contextComponents, components]
        );
      }
      const emptyObject = {};
      function MDXProvider({ components, children, disableParentContext }) {
        let allComponents;
        return (
          (allComponents = disableParentContext
            ? "function" == typeof components
              ? components({})
              : components || emptyObject
            : useMDXComponents(components)),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            MDXContext.Provider,
            { value: allComponents },
            children
          )
        );
      }
    },
    "./components/ui/Text/Text.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./components/ui/Text/Text.tsx"
        ),
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "Components/UI/Text",
        component: _Text__WEBPACK_IMPORTED_MODULE_1__.x,
        tags: ["autodocs"],
      };
      var Primary = {
        render: function render() {
          return __jsx(
            "div",
            { className: "space-y-2" },
            __jsx(
              _Text__WEBPACK_IMPORTED_MODULE_1__.x,
              { type: "h1" },
              "Heading 1"
            ),
            __jsx(
              _Text__WEBPACK_IMPORTED_MODULE_1__.x,
              { type: "h2" },
              "Heading 2"
            ),
            __jsx(
              _Text__WEBPACK_IMPORTED_MODULE_1__.x,
              { type: "h3" },
              "Heading 3"
            ),
            __jsx(
              _Text__WEBPACK_IMPORTED_MODULE_1__.x,
              { type: "h4" },
              "Heading 4"
            ),
            __jsx(
              _Text__WEBPACK_IMPORTED_MODULE_1__.x,
              { type: "h5" },
              "Heading 5"
            ),
            __jsx(
              _Text__WEBPACK_IMPORTED_MODULE_1__.x,
              { type: "h6" },
              "Heading 6"
            ),
            __jsx(_Text__WEBPACK_IMPORTED_MODULE_1__.x, { type: "p" }, "Normal")
          );
        },
      };
      Primary.parameters = {
        ...Primary.parameters,
        docs: {
          ...Primary.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div className="space-y-2">\n      <Text type="h1">Heading 1</Text>\n      <Text type="h2">Heading 2</Text>\n      <Text type="h3">Heading 3</Text>\n      <Text type="h4">Heading 4</Text>\n      <Text type="h5">Heading 5</Text>\n      <Text type="h6">Heading 6</Text>\n      <Text type="p">Normal</Text>\n    </div>\n}',
            ...Primary.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ["Primary"];
    },
    "./components/ui/Theme/Theme.mdx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, { default: () => Theme });
      var react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js"
        ),
        lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),
        dist = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs"
        ),
        defineProperty = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"
        ),
        slicedToArray = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"
        ),
        tailwind_config = __webpack_require__("./tailwind.config.js"),
        tailwind_config_default = __webpack_require__.n(tailwind_config),
        __jsx = react.createElement,
        colors = tailwind_config_default().theme.extend.colors,
        colorsArray = colors
          ? Object.entries(colors).map(function (_ref) {
              var _ref2 = (0, slicedToArray.Z)(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];
              return (0, defineProperty.Z)({}, key, value);
            })
          : [];
      function Brand(_ref4) {
        var colors = _ref4.colors;
        return __jsx(
          "table",
          { className: "w-full" },
          __jsx(
            "thead",
            null,
            __jsx(
              "tr",
              null,
              __jsx(
                "th",
                { className: "font-medium text-lg w-[20%]" },
                "Preview"
              ),
              __jsx(
                "th",
                { className: "font-medium text-lg w-[40%]" },
                "Tailwind Class"
              ),
              __jsx("th", { className: "font-medium text-lg w-[40%]" }, "Value")
            )
          ),
          __jsx(
            "tbody",
            { className: "text-center" },
            colors.map(function (t) {
              var tw = Object.keys(t)[0];
              return __jsx(PreviewTable, { tw, value: t[tw] });
            })
          )
        );
      }
      function PreviewTable(_ref5) {
        var tw = _ref5.tw,
          value = _ref5.value;
        return __jsx(
          "tr",
          { className: "!bg-white" },
          __jsx(
            "td",
            { className: "flex justify-center" },
            __jsx("div", {
              style: { height: "40px", width: "100px", backgroundColor: value },
            })
          ),
          __jsx("td", null, tw),
          __jsx("td", null, value)
        );
      }
      (Brand.displayName = "Brand"),
        (PreviewTable.displayName = "PreviewTable");
      try {
        (Brand.displayName = "Brand"),
          (Brand.__docgenInfo = {
            description: "",
            displayName: "Brand",
            props: {
              colors: {
                defaultValue: null,
                description: "",
                name: "colors",
                required: !0,
                type: { name: "any" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/ui/Theme/Theme.tsx#Brand"] = {
              docgenInfo: Brand.__docgenInfo,
              name: "Brand",
              path: "components/ui/Theme/Theme.tsx#Brand",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Text_stories = __webpack_require__(
          "./components/ui/Text/Text.stories.tsx"
        ),
        Blockstyle_stories = __webpack_require__(
          "./components/ui/BlockStyle/Blockstyle.stories.tsx"
        );
      function _createMdxContent(props) {
        const _components = Object.assign(
          { h1: "h1", h2: "h2", p: "p", code: "code", strong: "strong" },
          (0, lib.ah)(),
          props.components
        );
        return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            (0, jsx_runtime.jsx)(dist.h_, { title: "Theme" }),
            "\n",
            (0, jsx_runtime.jsx)(_components.h1, {
              id: "theme",
              children: "Theme",
            }),
            "\n",
            (0, jsx_runtime.jsx)(_components.h2, {
              id: "brand-colors",
              children: "Brand Colors",
            }),
            "\n",
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                "Imported from ",
                (0, jsx_runtime.jsx)(_components.code, {
                  children: "tailwind.config.ts",
                }),
                " file. You may edit these directly on the config file.",
              ],
            }),
            "\n",
            (0, jsx_runtime.jsx)("div", {
              className: "mb-10",
              children:
                colorsArray &&
                colorsArray.length > 0 &&
                (0, jsx_runtime.jsx)(Brand, { colors: colorsArray }),
            }),
            "\n",
            (0, jsx_runtime.jsx)(_components.h2, {
              id: "typography",
              children: "Typography",
            }),
            "\n",
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                "Standard typography theme of the project. See the ",
                (0, jsx_runtime.jsx)(_components.strong, { children: "Text" }),
                " component under the ",
                (0, jsx_runtime.jsx)(_components.strong, {
                  children: "Components/UI",
                }),
                " section for more information.",
              ],
            }),
            "\n",
            (0, jsx_runtime.jsx)(dist.Xz, { of: Text_stories.Primary }),
            "\n",
            (0, jsx_runtime.jsx)(_components.h2, {
              id: "default-block-styles",
              children: "Default Block Styles",
            }),
            "\n",
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                "Different from the ",
                (0, jsx_runtime.jsx)(_components.strong, {
                  children: "Typography",
                }),
                " section. This is used to render data using the ",
                (0, jsx_runtime.jsx)(_components.strong, {
                  children: "PortableText",
                }),
                " component, commonly used for blogs. See ",
                (0, jsx_runtime.jsx)(_components.strong, {
                  children: "Blockstyle",
                }),
                " under the ",
                (0, jsx_runtime.jsx)(_components.strong, {
                  children: "Components/UI",
                }),
                " section for more info.",
              ],
            }),
            "\n",
            (0, jsx_runtime.jsx)("div", {
              className: "p-8 boder-solid border border-gray-100/50",
              children: (0, jsx_runtime.jsx)(dist.oG, {
                of: Blockstyle_stories.Primary,
              }),
            }),
          ],
        });
      }
      const Theme = function MDXContent(props = {}) {
        const { wrapper: MDXLayout } = Object.assign(
          {},
          (0, lib.ah)(),
          props.components
        );
        return MDXLayout
          ? (0, jsx_runtime.jsx)(
              MDXLayout,
              Object.assign({}, props, {
                children: (0, jsx_runtime.jsx)(_createMdxContent, props),
              })
            )
          : _createMdxContent(props);
      };
    },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        function _arrayLikeToArray(arr, len) {
          (null == len || len > arr.length) && (len = arr.length);
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _arrayLikeToArray,
        });
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        function _extends() {
          return (
            (_extends = Object.assign
              ? Object.assign.bind()
              : function (target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source)
                      Object.prototype.hasOwnProperty.call(source, key) &&
                        (target[key] = source[key]);
                  }
                  return target;
                }),
            _extends.apply(this, arguments)
          );
        }
        __webpack_require__.d(__webpack_exports__, { Z: () => _extends });
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        function _objectWithoutProperties(source, excluded) {
          if (null == source) return {};
          var key,
            i,
            target = (function _objectWithoutPropertiesLoose(source, excluded) {
              if (null == source) return {};
              var key,
                i,
                target = {},
                sourceKeys = Object.keys(source);
              for (i = 0; i < sourceKeys.length; i++)
                (key = sourceKeys[i]),
                  excluded.indexOf(key) >= 0 || (target[key] = source[key]);
              return target;
            })(source, excluded);
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++)
              (key = sourceSymbolKeys[i]),
                excluded.indexOf(key) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(source, key) &&
                    (target[key] = source[key]));
          }
          return target;
        }
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _objectWithoutProperties,
        });
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, { Z: () => _slicedToArray });
        var unsupportedIterableToArray = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
        );
        function _slicedToArray(arr, i) {
          return (
            (function _arrayWithHoles(arr) {
              if (Array.isArray(arr)) return arr;
            })(arr) ||
            (function _iterableToArrayLimit(r, l) {
              var t =
                null == r
                  ? null
                  : ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
                    r["@@iterator"];
              if (null != t) {
                var e,
                  n,
                  i,
                  u,
                  a = [],
                  f = !0,
                  o = !1;
                try {
                  if (((i = (t = t.call(r)).next), 0 === l)) {
                    if (Object(t) !== t) return;
                    f = !1;
                  } else
                    for (
                      ;
                      !(f = (e = i.call(t)).done) &&
                      (a.push(e.value), a.length !== l);
                      f = !0
                    );
                } catch (r) {
                  (o = !0), (n = r);
                } finally {
                  try {
                    if (
                      !f &&
                      null != t.return &&
                      ((u = t.return()), Object(u) !== u)
                    )
                      return;
                  } finally {
                    if (o) throw n;
                  }
                }
                return a;
              }
            })(arr, i) ||
            (0, unsupportedIterableToArray.Z)(arr, i) ||
            (function _nonIterableRest() {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _unsupportedIterableToArray,
        });
        var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"
          );
        function _unsupportedIterableToArray(o, minLen) {
          if (o) {
            if ("string" == typeof o)
              return (0, _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
                o,
                minLen
              );
            var n = Object.prototype.toString.call(o).slice(8, -1);
            return (
              "Object" === n && o.constructor && (n = o.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(o)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? (0, _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
                    o,
                    minLen
                  )
                : void 0
            );
          }
        }
      },
    "./components/ui/Text/Text.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { x: () => Text });
      var _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"
          ),
        _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        utils_cn__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./utils/cn.ts"),
        _excluded = ["type", "className", "children", "style", "muted"],
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function Text(_ref) {
        var _variants$type,
          _ref$type = _ref.type,
          type = void 0 === _ref$type ? "p" : _ref$type,
          className = _ref.className,
          children = _ref.children,
          style = _ref.style,
          _ref$muted = _ref.muted,
          muted = void 0 !== _ref$muted && _ref$muted,
          props = (0,
          _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
            _ref,
            _excluded
          ),
          Element = ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(type)
            ? type
            : "p",
          commonClass = "".concat(muted && "text-gray-500"),
          variants = {
            h1: "".concat(
              commonClass,
              " text-4xl font-bold lg:text-5xl font-heading"
            ),
            h2: "".concat(commonClass, " text-3xl font-bold lg:text-4xl"),
            h3: "".concat(commonClass, " text-2xl font-bold lg:text-3xl"),
            h4: "".concat(commonClass, " font-bold text-2xl"),
            h5: "".concat(commonClass, " font-medium text-xl"),
            h6: "".concat(commonClass, " font-medium text-lg"),
            p: "".concat(commonClass, " text-base"),
          },
          variantClass =
            null !== (_variants$type = variants[type]) &&
            void 0 !== _variants$type
              ? _variants$type
              : variants.p;
        return __jsx(
          Element,
          (0,
          _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              style,
              className: (0, utils_cn__WEBPACK_IMPORTED_MODULE_3__.cn)(
                variantClass,
                className
              ),
            },
            props
          ),
          children
        );
      }
      Text.displayName = "Text";
      try {
        (Text.displayName = "Text"),
          (Text.__docgenInfo = {
            description: "",
            displayName: "Text",
            props: {
              type: {
                defaultValue: { value: "p" },
                description: "",
                name: "type",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"h5"' },
                    { value: '"h6"' },
                    { value: '"p"' },
                  ],
                },
              },
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              muted: {
                defaultValue: { value: "false" },
                description: "",
                name: "muted",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/ui/Text/Text.tsx#Text"] = {
              docgenInfo: Text.__docgenInfo,
              name: "Text",
              path: "components/ui/Text/Text.tsx#Text",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./tailwind.config.js": (module) => {
      module.exports = {
        content: [
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {
            colors: {
              "brand-primary-foreground": "#296eff",
              "brand-secondary-foreground": "#d5e3ff",
              "brand-primary": "#0045d8",
              "brand-secondary": "#3576ff",
            },
          },
        },
      };
    },
    "./utils/cn.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { cn: () => cn });
      var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/clsx/dist/clsx.mjs"
        ),
        tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/tailwind-merge/dist/bundle-mjs.mjs"
        );
      function cn() {
        for (
          var _len = arguments.length, inputs = new Array(_len), _key = 0;
          _key < _len;
          _key++
        )
          inputs[_key] = arguments[_key];
        return (0, tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m6)(
          (0, clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs)
        );
      }
    },
    "./node_modules/memoizerific sync recursive": (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = "./node_modules/memoizerific sync recursive"),
        (module.exports = webpackEmptyContext);
    },
  },
]);
