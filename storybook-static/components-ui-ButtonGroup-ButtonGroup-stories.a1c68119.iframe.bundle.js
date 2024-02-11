"use strict";
(self.webpackChunk_webriq_pagebuilder_site_template_default =
  self.webpackChunk_webriq_pagebuilder_site_template_default || []).push([
  [5027],
  {
    "./components/ui/ButtonGroup/ButtonGroup.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Inline: () => Inline,
          InlineFill: () => InlineFill,
          Left: () => Left,
          Middle: () => Middle,
          Right: () => Right,
          Stacked: () => Stacked,
          StackedFill: () => StackedFill,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => ButtonGroup_stories,
        });
      var react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        defineProperty = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"
        ),
        cn = __webpack_require__("./utils/cn.ts"),
        __jsx = react.createElement,
        ButtonGroup = function ButtonGroup(_ref) {
          var _variants$variant,
            _positions$position,
            _ref$variant = _ref.variant,
            variant = void 0 === _ref$variant ? "stacked" : _ref$variant,
            className = _ref.className,
            _ref$position = _ref.position,
            position = void 0 === _ref$position ? "left" : _ref$position,
            children = _ref.children,
            stacked = "".concat("", " flex flex-col gap-2 max-w-[300px]"),
            inline = "".concat("", " flex gap-2 items-center"),
            inlineFill = "".concat(
              inline,
              " flex gap-2 justify-between items-center w-full"
            ),
            stackedFill = "".concat("", " w-full space-y-2"),
            variantClass =
              null !==
                (_variants$variant = (0, defineProperty.Z)(
                  (0, defineProperty.Z)(
                    (0, defineProperty.Z)(
                      { stacked },
                      "inline-fill",
                      inlineFill
                    ),
                    "stacked-fill",
                    stackedFill
                  ),
                  "inline",
                  inline
                )[variant]) && void 0 !== _variants$variant
                ? _variants$variant
                : stacked,
            positionClass =
              null !==
                (_positions$position = {
                  left: "mr-auto",
                  middle: "inline" === variant ? "justify-center" : "mx-auto",
                  right: "inline" === variant ? "justify-end" : "ml-auto",
                }[position]) && void 0 !== _positions$position
                ? _positions$position
                : "mr-auto";
          return __jsx(
            "div",
            {
              className: "".concat(
                (0, cn.cn)(variantClass, positionClass, className)
              ),
            },
            react.Children.map(children, function (child) {
              return child
                ? __jsx(
                    "div",
                    {
                      className: "".concat(
                        "inline-fill" === variant && "flex-1",
                        " [&>button]:w-full"
                      ),
                    },
                    child
                  )
                : null;
            })
          );
        };
      ButtonGroup.displayName = "ButtonGroup";
      try {
        (ButtonGroup.displayName = "ButtonGroup"),
          (ButtonGroup.__docgenInfo = {
            description: "",
            displayName: "ButtonGroup",
            props: {
              variant: {
                defaultValue: { value: "stacked" },
                description: "",
                name: "variant",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"inline"' },
                    { value: '"stacked"' },
                    { value: '"inline-fill"' },
                    { value: '"stacked-fill"' },
                  ],
                },
              },
              position: {
                defaultValue: { value: "left" },
                description: "",
                name: "position",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"left"' },
                    { value: '"right"' },
                    { value: '"middle"' },
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
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "components/ui/ButtonGroup/ButtonGroup.tsx#ButtonGroup"
            ] = {
              docgenInfo: ButtonGroup.__docgenInfo,
              name: "ButtonGroup",
              path: "components/ui/ButtonGroup/ButtonGroup.tsx#ButtonGroup",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Button = __webpack_require__("./components/ui/Button/Button.tsx"),
        ButtonGroup_stories_jsx = react.createElement;
      const ButtonGroup_stories = {
        title: "Components/UI/Button Group",
        component: ButtonGroup,
        args: {
          children: [
            { id: 1, label: "One" },
            { id: 2, label: "Two" },
            { id: 3, label: "Three" },
          ].map(function (btn) {
            return ButtonGroup_stories_jsx(
              Button.z,
              { ariaLabel: btn.label, key: btn.id },
              btn.label
            );
          }),
        },
        decorators: [
          function (Story) {
            return ButtonGroup_stories_jsx(
              "div",
              { className: "p-2 border border-gray-100 border-solid" },
              ButtonGroup_stories_jsx(Story, null)
            );
          },
        ],
        tags: ["autodocs"],
      };
      var Stacked = {},
        Inline = { args: { variant: "inline" } },
        InlineFill = { args: { variant: "inline-fill" } },
        StackedFill = { args: { variant: "stacked-fill" } },
        Left = { args: { variant: "stacked", position: "left" } },
        Middle = { args: { variant: "stacked", position: "middle" } },
        Right = { args: { variant: "stacked", position: "right" } };
      (Stacked.parameters = {
        ...Stacked.parameters,
        docs: {
          ...Stacked.parameters?.docs,
          source: { originalSource: "{}", ...Stacked.parameters?.docs?.source },
        },
      }),
        (Inline.parameters = {
          ...Inline.parameters,
          docs: {
            ...Inline.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    variant: "inline"\n  }\n}',
              ...Inline.parameters?.docs?.source,
            },
          },
        }),
        (InlineFill.parameters = {
          ...InlineFill.parameters,
          docs: {
            ...InlineFill.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    variant: "inline-fill"\n  }\n}',
              ...InlineFill.parameters?.docs?.source,
            },
          },
        }),
        (StackedFill.parameters = {
          ...StackedFill.parameters,
          docs: {
            ...StackedFill.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    variant: "stacked-fill"\n  }\n}',
              ...StackedFill.parameters?.docs?.source,
            },
          },
        }),
        (Left.parameters = {
          ...Left.parameters,
          docs: {
            ...Left.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    variant: "stacked",\n    position: "left"\n  }\n}',
              ...Left.parameters?.docs?.source,
            },
          },
        }),
        (Middle.parameters = {
          ...Middle.parameters,
          docs: {
            ...Middle.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    variant: "stacked",\n    position: "middle"\n  }\n}',
              ...Middle.parameters?.docs?.source,
            },
          },
        }),
        (Right.parameters = {
          ...Right.parameters,
          docs: {
            ...Right.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    variant: "stacked",\n    position: "right"\n  }\n}',
              ...Right.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = [
        "Stacked",
        "Inline",
        "InlineFill",
        "StackedFill",
        "Left",
        "Middle",
        "Right",
      ];
    },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _defineProperty,
        });
        var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"
          );
        function _defineProperty(obj, key, value) {
          return (
            (key = (0, _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
              key
            )) in obj
              ? Object.defineProperty(obj, key, {
                  value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (obj[key] = value),
            obj
          );
        }
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => toPropertyKey });
        var esm_typeof = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/typeof.js"
        );
        function toPropertyKey(t) {
          var i = (function toPrimitive(t, r) {
            if ("object" != (0, esm_typeof.Z)(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var i = e.call(t, r || "default");
              if ("object" != (0, esm_typeof.Z)(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === r ? String : Number)(t);
          })(t, "string");
          return "symbol" == (0, esm_typeof.Z)(i) ? i : String(i);
        }
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/typeof.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        __webpack_require__.d(__webpack_exports__, { Z: () => _typeof });
      },
    "./components/ui/Button/Button.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { z: () => Button });
      var _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
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
        utils_cn__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./utils/cn.ts"),
        react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/react-icons/fa/index.esm.js"
        ),
        _excluded = [
          "variant",
          "className",
          "ariaLabel",
          "children",
          "loading",
          "disabled",
          "loadingComponent",
          "onClick",
          "type",
        ],
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function Button(_ref) {
        var _variants$variant,
          _ref$variant = _ref.variant,
          variant = void 0 === _ref$variant ? "primary" : _ref$variant,
          className = _ref.className,
          ariaLabel = _ref.ariaLabel,
          children = _ref.children,
          loading = _ref.loading,
          disabled = _ref.disabled,
          loadingComponent = _ref.loadingComponent,
          onClick = _ref.onClick,
          _ref$type = _ref.type,
          type = void 0 === _ref$type ? "button" : _ref$type,
          props = (0,
          _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
            _ref,
            _excluded
          ),
          commonStyles =
            "inline-block py-2 px-6 rounded-l-xl rounded-t-xl font-bold  transition duration-200",
          primary = "".concat(
            commonStyles,
            " bg-brand-primary hover:bg-brand-primary-foreground text-gray-50  outline-none "
          ),
          outline = "".concat(
            commonStyles,
            " bg-white hover:bg-slate-100  font-bold border text-brand-primary-foreground border-brand-primary-foreground "
          ),
          variantClass =
            null !==
              (_variants$variant = {
                primary,
                secondary: "".concat(
                  commonStyles,
                  " bg-brand-secondary hover:bg-brand-primary font-bold  text-gray-50"
                ),
                outline,
                borderless: "".concat(
                  commonStyles,
                  " bg-transparent hover:bg-slate-100 border-0"
                ),
                tertiary: "".concat(
                  commonStyles,
                  " rounded bg-brand-primary hover:bg-brand-primary-foreground text-gray-50  outline-none"
                ),
              }[variant]) && void 0 !== _variants$variant
              ? _variants$variant
              : primary,
          Loader =
            null != loadingComponent
              ? loadingComponent
              : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.fCD, {
                  className: "animate-spin",
                  size: 30,
                });
        return __jsx(
          "button",
          (0,
          _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              onClick,
              disabled: null != disabled ? disabled : loading,
              className: (0, utils_cn__WEBPACK_IMPORTED_MODULE_4__.cn)(
                variantClass,
                className
              ),
              "aria-label": ariaLabel,
              type,
            },
            props
          ),
          loading ? Loader : children
        );
      }
      Button.displayName = "Button";
      try {
        (Button.displayName = "Button"),
          (Button.__docgenInfo = {
            description: "",
            displayName: "Button",
            props: {
              className: {
                defaultValue: null,
                description: "Defines the classname of the button.",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              variant: {
                defaultValue: { value: "primary" },
                description: "",
                name: "variant",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"outline"' },
                    { value: '"secondary"' },
                    { value: '"borderless"' },
                    { value: '"tertiary"' },
                  ],
                },
              },
              ariaLabel: {
                defaultValue: null,
                description:
                  'String value that labels the interactive element e.g. "Submit"',
                name: "ariaLabel",
                required: !0,
                type: { name: "string" },
              },
              children: {
                defaultValue: null,
                description: "Defines the content inside the button.",
                name: "children",
                required: !0,
                type: { name: "ReactNode" },
              },
              loading: {
                defaultValue: null,
                description: "Sets the button in a loading state.",
                name: "loading",
                required: !1,
                type: { name: "boolean" },
              },
              disabled: {
                defaultValue: null,
                description: "Sets the button in a disabled state.",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              loadingComponent: {
                defaultValue: null,
                description: "Custom loading component.",
                name: "loadingComponent",
                required: !1,
                type: { name: "ReactNode" },
              },
              onClick: {
                defaultValue: null,
                description: "Function that runs when the button is clicked.",
                name: "onClick",
                required: !1,
                type: { name: "() => void" },
              },
              type: {
                defaultValue: { value: "button" },
                description: "Set button type. Defaults to button",
                name: "type",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"button"' }, { value: '"submit"' }],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/ui/Button/Button.tsx#Button"] =
              {
                docgenInfo: Button.__docgenInfo,
                name: "Button",
                path: "components/ui/Button/Button.tsx#Button",
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./utils/cn.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
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
  },
]);
