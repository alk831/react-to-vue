(this["webpackJsonpweb-client"]=this["webpackJsonpweb-client"]||[]).push([[0],{1016:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(156),a=n(243);t.createReactUseRefCallExp=a.createGenericCallExp(r.REACT_USE_REF),t.createReactUseRefDeclarator=function(e,n){return a.createVariableDeclarator(e,t.createReactUseRefCallExp(n))}},1017:function(e,t,n){"use strict";var r=n(13),a=n(325);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object.defineProperty(t,"__esModule",{value:!0});var c=n(244),u=n(156),s=n(415),l=n(414),f=n(49),d=l.isCallExpWithName(u.REACT_USE_REF),p=l.isCallExpWithName(u.REACT_USE_MEMO),E=l.isCallExpWithName(u.REACT_USE_CALLBACK),m=l.isCallExpWithName(u.REACT_USE_EFFECT),v=l.isCallExpWithName(u.REACT_USE_LAYOUT_EFFECT);t.isReactUseContextCallExpName=l.isCallExpWithName(u.REACT_USE_CONTEXT),t.isReactUseLayoutEffectCallExp=function(e){var t=v(e),n=b(e);return t&&n?i({},n):u.ASSERT_FALSE},t.isReactSetStateCall=function(e){if(!c.t.isIdentifier(e.callee))return u.ASSERT_FALSE;var n=s.stateDeclarationsMap.get(e.callee.name);if(!n)return u.ASSERT_FALSE;if(!t.isCorrectReactStateSetterName(e.callee.name))return u.ASSERT_FALSE;var a=r(e.arguments,1)[0],o=n.stateValueName;return a?{stateValueName:o,setStateArg:a,stateDeclarationInfo:n}:u.ASSERT_FALSE};t.isReactUseEffectCallExp=function(e){if(!c.t.isCallExpression(e))return u.ASSERT_FALSE;if(!m(e))return u.ASSERT_FALSE;var t=r(e.arguments,2),n=t[0],a=t[1],o=function(e){var t;if(!c.t.isArrowFunctionExpression(e))return u.ASSERT_FALSE;var n=f.removeReturnStatementFromFunction(e),r=n.updatedFunction,a=n.removedStatement,o=e;return a&&c.t.isArrowFunctionExpression(null===(t=a)||void 0===t?void 0:t.argument)?{cleanupCallback:a.argument,callbackWithoutCleanup:r,originalCallback:o}:{cleanupCallback:null,callbackWithoutCleanup:r,originalCallback:o}}(n),s=_(a);return o&&s?i({},o,{},s):u.ASSERT_FALSE};t.isCorrectReactStateSetterName=function(e){return e.startsWith(u.REACT_STATE_SETTER_PREFIX)};t.isReactStateDeclarator=function(e){var n=function(e){if(!c.t.isArrayPattern(e))return u.ASSERT_FALSE;var n=r(e.elements,2),a=n[0],o=n[1];return c.t.isIdentifier(a)&&c.t.isIdentifier(o)&&t.isCorrectReactStateSetterName(o.name)?{stateValue:a,stateSetter:o}:u.ASSERT_FALSE}(e.id),a=function(e){if(!c.t.isCallExpression(e))return u.ASSERT_FALSE;if(!c.t.isIdentifier(e.callee))return u.ASSERT_FALSE;var t=r(e.arguments,1)[0],n=void 0===t;return e.callee.name!==u.REACT_USE_STATE?u.ASSERT_FALSE:n?u.ASSERT_FALSE:{initialStateValue:t}}(e.init);if(!a)return u.ASSERT_FALSE;if(!n)return u.ASSERT_FALSE;var o=a.initialStateValue,i=n.stateSetter;return{initialStateValue:o,stateValue:n.stateValue,stateSetter:i,initialStateValueType:c.t.isLiteral(o)?"primitive":"object"}},t.isReactMemberExp=function(e){var t=e.object,n=e.property;return c.t.isIdentifier(t)&&c.t.isIdentifier(n)?n.name!==u.REACT_REF_PROPERTY?u.ASSERT_FALSE:{variableName:t.name}:u.ASSERT_FALSE},t.isReactUseRefVariableDeclarator=function(e){var t=d(e.init);return c.t.isIdentifier(e.id)&&t?{variableName:e.id.name,initialValue:r(t.args,1)[0]}:u.ASSERT_FALSE},t.isReactUseMemoCallExp=function(e){var t=p(e),n=b(e);return t&&n?{memoizedCallback:n.callback}:u.ASSERT_FALSE};var _=function(e){if(c.t.isArrayExpression(e)){var t=l.isArrayOfIdentifiers(e);return t?{dependencies:t.elements}:u.ASSERT_FALSE}return{dependencies:null}},b=function(e){if(!c.t.isCallExpression(e))return u.ASSERT_FALSE;var t=r(e.arguments,2),n=t[0],a=t[1],o=_(a);return o&&l.isAnyFunctionExpression(n)?i({},o,{callback:n}):u.ASSERT_FALSE};t.isReactUseCallbackCallExp=function(e){var t=b(e);if(!E(e))return u.ASSERT_FALSE;if(!t)return u.ASSERT_FALSE;var n=t.callback;return{wrappedCallback:c.t.arrowFunctionExpression([],n)}}},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(62),a=n(49);t.useMemoVisitors=[function(){return{CallExpression:function(e){var t=r.isReactUseMemoCallExp(e.node);if(t){var n=t.memoizedCallback,o=a.createVueComputedCallExp(n);e.replaceWith(o)}}}}]},1019:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(62),a=n(49);t.useCallbackVisitors=[function(){return{CallExpression:function(e){var t=r.isReactUseCallbackCallExp(e.node);if(t){var n=t.wrappedCallback,o=a.createVueComputedCallExp(n);e.replaceWith(o)}}}}]},1020:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(49),a=n(62);t.useEffectVisitors=[function(){return{Expression:function(e){var t=a.isReactUseEffectCallExp(e.node);if(t){var n=t.dependencies,o=t.originalCallback,i=t.cleanupCallback,c=t.callbackWithoutCleanup;if(null===n){var u=r.createVueOnUpdatedCallExp(o);return e.replaceWith(u)}if(n.length>0){var s=r.createVueWatchCallExp({callback:o,dependencies:n,cleanupCallback:i});return e.replaceWith(s)}if(0===n.length){var l=r.createVueOnMountedCallExp(o);return i?e.replaceWithMultiple(r.createExpressionStatements(r.createVueOnMountedCallExp(c),r.createVueOnUnmountedCallExp(i))):e.replaceWith(l)}}}}}]},1021:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(49),a=n(62);t.useContextVisitors=[function(){return{CallExpression:function(e){if(a.isReactUseContextCallExpName(e.node)){var t=r.createVueInjectCallExp(e.node.arguments);e.replaceWith(t)}}}}]},1022:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(62),a=n(49);t.useLayoutEffectVisitors=[function(){return{CallExpression:function(e){var t=r.isReactUseLayoutEffectCallExp(e.node);if(t){var n=t.callback,o=a.createVueOnBeforeMountCallExp(n);e.replaceWith(o)}}}}]},1051:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(11),i=n.n(o),c=(n(441),n(41)),u=n(159),s=n(67),l=n.n(s),f=n(246),d=n.n(f),p=document.getElementById("modal"),E=function(e){var t=Object(r.useRef)(document.createElement("div")),n=Object(r.useRef)(null);Object(r.useEffect)((function(){return null===p||void 0===p||p.appendChild(t.current),function(){null===p||void 0===p||p.removeChild(t.current)}}),[]);var o=a.a.createElement("div",{className:d.a.container,onClick:function(t){var r;t.target===n.current&&(null===(r=e.onClose)||void 0===r||r.call(e))},ref:n},a.a.createElement("div",{className:d.a.content},e.children));return i.a.createPortal(o,t.current)},m=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],o=t[1],i=function(){return o(!1)};return Object(r.useEffect)((function(){var e=document.body.classList;return e[n?"add":"remove"]("modal-opened"),function(){e.remove("modal-opened")}}),[n]),{Modal:function(e){return n?a.a.createElement(E,{onClose:i},e.children):null},open:function(){return o(!0)},close:i,toggle:function(){return o((function(e){return!e}))}}},v=n(79),_=n(107),b=n(420),S=n(421),C=n.n(S),h=function(e){return Object(b.format)(e,{parser:"babel",plugins:[C.a],semi:!0})},g=function(e){if(null!==e&&"loc"in e){var t=e.message,n=e.loc;if("line"in n)return{line:n.line,column:n.column,message:t};if("start"in n){var r=n.start;return{line:r.line,column:r.column,message:t}}}return{line:0,column:0,message:(null===e||void 0===e?void 0:e.message)||"Unknown error"}},R=[{name:"useCounter",code:"\n      const useCounter = () => {\n        const [counter, setCounter] = useState(0);\n\n        const increment = () => setCounter(v => v + 1);\n\n        return { counter, increment };        \n      }\n    "},{name:"useMousePosition",code:'\n      const useMousePosition = () => {\n        const [x, setX] = useState(0);\n        const [y, setY] = useState(0);\n      \n        function update(event) {\n          setX(event.pageX);\n          setY(event.pageY);\n        }\n      \n        useEffect(() => {\n          window.addEventListener("mousemove", update);\n      \n          return () => {\n            window.removeEventListener("mousemove", update);\n          }\n        }, []);\n        \n        return { x, y };\n      }\n    '},{name:"useApiData",code:'\n      const useApiData = () => {\n        const [data, setData] = useState(null);\n        const [error, setError] = useState(null);\n        const [isLoading, setIsLoading] = useState(true);\n        const abortController = useRef(new AbortController());\n      \n        useEffect(() => {\n          const { signal } = abortController.current;\n      \n          fetch("example.com", { signal })\n            .then(response => response.json())\n            .then(json => setData(json))\n            .catch(error => setError(error))\n            .finally(() => setIsLoading(false));\n      \n          return () => {\n            abortController.current.abort();\n          }\n        }, []);\n        \n        return {\n          data,\n          error,\n          isLoading\n        };\n      };\n    '},{name:"useInputFocus",code:"\n      function useInputFocus() {\n        const inputRef = useRef(null);\n      \n        useEffect(() => {\n          if (inputRef.current != null) {\n            inputRef.current.focus();\n          }\n        }, []);\n      \n        return inputRef;\n      }\n    "},{name:"useTheme",code:"\n      function useTheme() {\n        const theme = useContext(ThemeContext);\n      \n        if (theme == null) {\n          throw new Error('Theme has not been provided');\n        }\n      \n        return theme;\n      }\n    "},{name:"useTodo",code:"\n      const useTodos = () => {\n        const [todos, setTodos] = useState([]);\n\n        const addTodo = (todoName) => setTodos([...todos, todoName]);\n  \n        const removeTodo = (todoName) => {\n          const filteredTodos = todos.filter(todo => todo.name !== todoName);\n          setTodos(filteredTodos);\n        }\n  \n        return {\n          todos,\n          addTodo,\n          removeTodo\n        }\n      }\n    "},{name:"useMedia",code:"\n    function useMedia(queries, values, defaultValue) {\n      // Array containing a media query list for each query\n      const mediaQueryLists = queries.map(q => window.matchMedia(q));\n    \n      // Function that gets value based on matching media query\n      const getValue = () => {\n        // Get index of first media query that matches\n        const index = mediaQueryLists.findIndex(mql => mql.matches);\n        // Return related value or defaultValue if none\n        return typeof values[index] !== 'undefined' ? values[index] : defaultValue;\n      };\n    \n      // State and setter for matched value\n      const [value, setValue] = useState(getValue);\n    \n      useEffect(\n        () => {\n          // Event listener callback\n          // Note: By defining getValue outside of useEffect we ensure that it has ...\n          // ... current values of hook args (as this hook callback is created once on mount).\n          const handler = () => setValue(getValue);\n          // Set a listener for each media query with above handler as callback.\n          mediaQueryLists.forEach(mql => mql.addListener(handler));\n          // Remove listeners on cleanup\n          return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));\n        },\n        [] // Empty array ensures effect is only run on mount and unmount\n      );\n    \n      return value;\n    }\n    "}],O=R[0],A=(O.code,function(){try{var e=localStorage.getItem("react_code")||O.code;return h(e)}catch(t){return O.code}}),y=function(){var e=Object(r.useState)(A),t=Object(c.a)(e,2),n=t[0],a=t[1],o=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(r.useState)(""),a=Object(c.a)(n,2),o=a[0],i=a[1],u=Object(r.useState)(null),s=Object(c.a)(u,2),l=s[0],f=s[1],d=function(n){try{l&&f(null);var r=v.transform(n,{retainLines:!0,plugins:e});if(null!=(null===r||void 0===r?void 0:r.code)){var a=r.code;if(t){var o=h(a);i(o)}else i(a)}}catch(l){f(g(l))}};return{code:o,error:l,transform:d}}([_.hooksToCompositionPlugin]),i=o.transform,u=o.error,s=o.code;return Object(r.useEffect)((function(){i(n),localStorage.setItem("react_code",n)}),[n]),{vueCode:s,reactError:u,reactCode:n,setReactCode:a}},x=n(1084),T=n(1081),V=n(80),j=n(422),w=n.n(j),U=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)();Object(r.useEffect)((function(){V.monaco.init().then((function(e){return n.current=e}))}),[]),Object(r.useEffect)((function(){if(t.current&&n.current){var r=t.current.getModel();if(null==e.error)n.current.editor.setModelMarkers(r,"custom_marker",[]);else{var a=e.error,o=a.line,i=a.column,c=a.message;n.current.editor.setModelMarkers(r,"custom_marker",[{startLineNumber:o,startColumn:i,endLineNumber:o,endColumn:i,message:c,severity:n.current.MarkerSeverity.Error}])}}}),[e.error]);return a.a.createElement("div",{className:w.a.container},e.header,a.a.createElement(V.ControlledEditor,{language:"javascript",value:e.value,height:M,width:F,onChange:function(t,n){n&&e.onChange&&e.onChange(n)},editorDidMount:function(e,n){t.current=n},options:e.options}))},M="500px",F="38vw",P=n(423),N=n.n(P),L=function(e){return a.a.createElement("div",{className:N.a.container},e.editors.map((function(e,t){return a.a.createElement(U,Object.assign({key:t},e))})))},k=n(109),D=n.n(k),W=n(424),I=n.n(W),q=n(425),B=n.n(q),G=function(e){var t=e.reactCode,n=e.setReactCode,r=e.reactError,o=e.vueCode;return a.a.createElement(L,{editors:[{value:t,onChange:n,error:r,header:Y},{value:o,options:{readOnly:!0},header:X}]})},Y=a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:B.a,alt:"React.js logo",className:D.a.logo}),a.a.createElement("p",{className:D.a.desc},"React.js - Hooks")),X=a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:I.a,alt:"Vue.js logo",className:D.a.logo}),a.a.createElement("p",{className:D.a.desc},"Vue.js - Composition Api")),H=n(1076),J=n(1083),Q=n(1082),z=n(1080);function K(e){var t=Z(),n=e.title,r=e.value,o=e.options,i=e.renderOption,c=Object(u.a)(e,["title","value","options","renderOption"]);return a.a.createElement(H.a,{variant:"filled",className:t.form},a.a.createElement(J.a,null,n),a.a.createElement(Q.a,Object.assign({value:r},c),o.map(i)))}var Z=Object(z.a)((function(e){return{form:{background:"#fff",borderRadius:e.shape.borderRadius}}})),$=n(430);var ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement((function(){var e=y(),t=e.reactCode,n=e.setReactCode,o=e.reactError,i=e.vueCode,s=m(),f=s.Modal,d=Object(u.a)(s,["Modal"]),p=Object(r.useState)(O.name),E=Object(c.a)(p,2),v=E[0],_=E[1];return a.a.createElement("main",{className:l.a.container},a.a.createElement("div",{className:l.a.heading_container},a.a.createElement("span",{className:l.a.version},$.version),a.a.createElement("h1",{className:l.a.heading},"use-frontend")),a.a.createElement("p",{className:l.a.intro},"Transform React.js Hooks to Vue.js Composition Api"),a.a.createElement(K,{title:"Example",value:v,onChange:function(e){var t=e.target.value;if("string"===typeof t){var r=R.find((function(e){return e.name===t}));r&&(_(t),n(h(r.code)))}},options:R,renderOption:function(e){return a.a.createElement(x.a,{key:e.name,value:e.name},e.name)}}),a.a.createElement("div",{className:l.a.content},a.a.createElement(G,e),o&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Error"),a.a.createElement("p",null,o.message)),a.a.createElement(T.a,{onClick:d.open,variant:"contained"},"Compare")),a.a.createElement(f,null,a.a.createElement(V.DiffEditor,{original:t,modified:i,language:"javascript",height:"500px"})))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/use-frontend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/use-frontend","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):te(t,e)}))}}()},107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(707);t.hooksToCompositionPlugin=function(){return{name:"hooks-to-composition",visitor:r.rootVisitor}}},109:function(e,t,n){e.exports={logo:"ReactToVueEditor_logo__3Ztsr",desc:"ReactToVueEditor_desc__2nWiX"}},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.REACT_STATE_SETTER_PREFIX="set",t.REACT_USE_STATE="useState",t.REACT_USE_MEMO="useMemo",t.REACT_USE_CALLBACK="useCallback",t.REACT_USE_EFFECT="useEffect",t.REACT_USE_REF="useRef",t.REACT_REF_PROPERTY="current",t.REACT_USE_CONTEXT="useContext",t.REACT_USE_LAYOUT_EFFECT="useLayoutEffect",t.VUE_COMPUTED="computed",t.VUE_REF="ref",t.VUE_REF_PROPERTY="value",t.VUE_REACTIVE="reactive",t.VUE_ON_UPDATED="onUpdated",t.VUE_ON_MOUNTED="onMounted",t.VUE_ON_UNMOUNTED="onUnmounted",t.VUE_WATCH="watch",t.VUE_INJECT="inject",t.VUE_ON_BEFORE_MOUNT="onBeforeMount",t.VUE_ON_CLEANUP="onCleanup",t.VUE_PREV="prev",t.ASSERT_FALSE=!1,function(e){e.equal="="}(t.OPERATOR||(t.OPERATOR={}))},192:function(e,t,n){"use strict";var r=n(10),a=n(325),o=n(13);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var s=u(n(193)),l=n(107),f=new Set;t.mountPluginTester=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){var n,r,a=s.transform(e.trim(),{plugins:t,retainLines:!0});if(null==(null===(n=a)||void 0===n?void 0:n.code))throw new Error('Could not transform code properly: "'.concat(null===(r=a)||void 0===r?void 0:r.code,'"'));return a.code}},t.testVisitors=function(){var e,n={visitor:(e=t).combineVisitors.apply(e,arguments)},r=t.mountPluginTester(n);return function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t?e.trim():e;return r(n)}};var d=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return Object.entries(t(null)).forEach((function(t){var n,r=o(t,2),a=r[0],i=r[1];e[a]||(e[a]=[]),null===(n=e[a])||void 0===n||n.push(i)})),e}),{})};t.combineVisitors=function(){var e=d.apply(void 0,arguments),t=Object.entries(e),n=t.reduce((function(e,t){var n=o(t,2),r=n[0],i=n[1];return c({},e,a({},r,(function(e,t){i.forEach((function(n){var r=typeof n;if("function"===r)return n(e,t);throw new Error('Visitor entries may only be a type of function, when using with "combine visitors" utility. \n'+'Current type: "'.concat(r,'".'))}))})))}),{});return n},t.trackReactUseRefDeclaration=function(e){f.has(e)||f.add(e)},t.filterOut=function(e,t){var n=e.reduce((function(e,n,a,i){var c=o(e,2),u=c[0],s=c[1];return t(n,a,i)?[[].concat(r(u),[n]),s]:[u,[].concat(r(s),[n])]}),[[],[]]),a=o(n,2);return{preservedItems:a[0],removedItems:a[1]}},t.transform=t.mountPluginTester(l.hooksToCompositionPlugin)},243:function(e,t,n){"use strict";var r=n(13);Object.defineProperty(t,"__esModule",{value:!0});var a=n(244),o=n(192),i=function(e,t){return a.t.objectProperty(a.t.identifier(e),function(e){if(null===e)return a.t.nullLiteral();switch(typeof e){case"number":return a.t.numericLiteral(e);case"string":return a.t.stringLiteral(e);case"boolean":return a.t.booleanLiteral(e);default:throw new Error("Unhandled literal type ".concat(e))}}(t))};t.createObjectExpression=function(e){var t=Object.entries(e).filter((function(e){var t=r(e,2);t[0];return void 0!==t[1]})).map((function(e){var t=r(e,2),n=t[0],a=t[1];return i(n,a)}));return a.t.objectExpression(t)},t.createCallExp=function(e,t){return a.t.callExpression(a.t.identifier(e),t)},t.createGenericCallExp=function(e){return function(n){var r=Array.isArray(n)?n:[n];return t.createCallExp(e,r)}},t.createInitialStateCallExp=function(e){return function(n){return t.createCallExp(e,[n])}},t.createCallbackCallExp=function(e){return function(n){return t.createCallExp(e,[n])}},t.updateArrowFunctionBody=function(e,t){if(!a.t.isBlockStatement(e.body))throw new Error;return a.t.arrowFunctionExpression(e.params,c(e.body,t))};var c=function(e,t){return a.t.blockStatement(t(e.body),e.directives)};t.removeReturnStatementFromFunction=function(e){return function(e,n){var a;return{updatedFunction:t.updateArrowFunctionBody(e,(function(e){var t=o.filterOut(e,(function(e){return e.type!==n})),i=t.preservedItems,c=t.removedItems,u=r(c,1)[0];return a=u,i})),removedStatement:a}}(e,"ReturnStatement")},t.createAssignment=function(e,t){return a.t.assignmentExpression("=",a.t.identifier(e),t)};t.createVariableDeclarator=function(e,t){return a.t.variableDeclarator(a.t.identifier(e),t)},t.createMemberExp=function(e,t){return a.t.memberExpression(a.t.identifier(e),a.t.identifier(t))},t.createExpressionStatements=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return a.t.expressionStatement(e)}))}},244:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(33));t.t=a},246:function(e,t,n){e.exports={container:"Modal_container__2_wW_","fade-in":"Modal_fade-in__2xoJc",content:"Modal_content__3ZziX","slide-in":"Modal_slide-in__1ICaQ"}},414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(156),a=n(244);t.isArrayOfIdentifiers=function(e){if(!a.t.isArrayExpression(e))return r.ASSERT_FALSE;var t=e.elements;return function(e,t){return e.every((function(e){return null!==e&&e.type===t}))}(t,"Identifier")?{elements:t}:r.ASSERT_FALSE},t.isCallExpWithName=function(e){return function(t){if(!a.t.isCallExpression(t))return r.ASSERT_FALSE;var n=t.callee,o=t.arguments;return a.t.isIdentifier(n)?n.name!==e?r.ASSERT_FALSE:{callee:n,args:o}:r.ASSERT_FALSE}},t.isAnyFunctionExpression=function(e){return!(!a.t.isFunctionExpression(e)&&!a.t.isArrowFunctionExpression(e))}},415:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(33)),o=n(49),i=n(62);t.stateDeclarationsMap=new Map;t.useStateVisitors=[function(){return{VariableDeclarator:function(e){var n=i.isReactStateDeclarator(e.node);if(n){var r=n.stateValue,a=n.stateSetter,c=n.initialStateValue,u=n.initialStateValueType,s=r.name,l=a.name;if("primitive"===u){var f=o.createVueRefDeclarator(s,c);return t.stateDeclarationsMap.set(l,{type:"vue_ref",stateValueName:s}),e.replaceWith(f)}var d=o.createVueReactiveDeclarator(s,c);return t.stateDeclarationsMap.set(l,{type:"vue_reactive",stateValueName:s}),e.replaceWith(d)}}}},function(){return{CallExpression:function(e){var t=i.isReactSetStateCall(e.node);if(t){var n=t.setStateArg,r=t.stateValueName,c="vue_ref"===t.stateDeclarationInfo.type,u=c?o.createVueRefMemberExp:a.identifier,s=c?o.createVueRefValueAssignment:o.createAssignment;if(i.isAnyFunctionExpression(n)){var l=n.body;if(a.isIdentifier(l)){var f=s(r,u(r));return e.replaceWith(f)}if(!a.isBinaryExpression(l))return;if(!a.isIdentifier(l.left))return;var d=s(r,a.binaryExpression(l.operator,u(r),l.right));return e.replaceWith(d)}if(!a.isSpreadElement(n)){var p=s(r,n);return e.replaceWith(p)}}}}}]},422:function(e,t,n){e.exports={container:"MonacoEditor_container__1DCHy"}},423:function(e,t,n){e.exports={container:"MonacoSplitEditor_container__ojDL8"}},424:function(e,t,n){e.exports=n.p+"static/media/vue-logo.9075ee3c.svg"},425:function(e,t,n){e.exports=n.p+"static/media/react-logo.5d5d9eef.svg"},430:function(e){e.exports=JSON.parse('{"name":"web-client","version":"1.0.3-beta","private":true,"homepage":"https://alk831.github.io/use-frontend/","dependencies":{"@material-ui/core":"^4.9.0","@monaco-editor/react":"^3.0.1","babel-plugin-hooks-to-composition":"^1.0.3-beta","prettier":"^1.19.1","react":"^16.12.0","react-dom":"^16.12.0","react-scripts":"3.3.0"},"scripts":{"start":"react-scripts start","dev":"npm start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","typecheck":"tsc --noEmit","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.4.0","@testing-library/user-event":"^7.2.1","@types/prettier":"^1.19.0","@types/styled-components":"^4.4.2","gh-pages":"^2.2.0"}}')},436:function(e,t,n){e.exports=n(1051)},441:function(e,t,n){},49:function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(959)),r(n(243)),r(n(1016))},62:function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(414)),r(n(1017))},67:function(e,t,n){e.exports={container:"App_container__3tvFc",heading_container:"App_heading_container__1c2yW",heading:"App_heading__3SqD_",version:"App_version__6CSYF",content:"App_content__24un5",intro:"App_intro__2bh0C"}},699:function(e,t){},707:function(e,t,n){"use strict";var r=n(10);Object.defineProperty(t,"__esModule",{value:!0});var a=n(192),o=n(958),i=n(1018),c=n(1019),u=n(1020),s=n(415),l=n(1021),f=n(1022);t.rootVisitor=a.combineVisitors.apply(a,r(o.useRefVisitors).concat(r(i.useMemoVisitors),r(c.useCallbackVisitors),r(u.useEffectVisitors),r(s.useStateVisitors),r(l.useContextVisitors),r(f.useLayoutEffectVisitors)))},950:function(e,t){},958:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(49),a=n(62),o=n(192);t.useRefVisitors=[function(){return{VariableDeclarator:function(e){var t=a.isReactUseRefVariableDeclarator(e.node);if(t){var n=t.variableName,i=t.initialValue;o.trackReactUseRefDeclaration(n);var c=r.createVueRefDeclarator(n,i);e.replaceWith(c)}}}},function(){return{MemberExpression:function(e){var t=a.isReactMemberExp(e.node);if(t){var n=t.variableName,o=r.createVueRefMemberExp(n);e.replaceWith(o)}}}}]},959:function(e,t,n){"use strict";var r=n(10),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(33)),i=n(243),c=n(156);t.createVueOnMountedCallExp=i.createGenericCallExp(c.VUE_ON_MOUNTED),t.createVueOnUpdatedCallExp=i.createGenericCallExp(c.VUE_ON_UPDATED),t.createVueInjectCallExp=i.createGenericCallExp(c.VUE_INJECT),t.createVueOnUnmountedCallExp=i.createGenericCallExp(c.VUE_ON_UNMOUNTED),t.createVueOnBeforeMountCallExp=i.createGenericCallExp(c.VUE_ON_BEFORE_MOUNT);var u=i.createGenericCallExp(c.VUE_REF);t.createVueComputedCallExp=i.createGenericCallExp(c.VUE_COMPUTED);var s=i.createGenericCallExp(c.VUE_REACTIVE),l=i.createGenericCallExp(c.VUE_ON_CLEANUP);t.createVueRefMemberExp=function(e){return i.createMemberExp(e,c.VUE_REF_PROPERTY)},t.createVueRefValueAssignment=function(e,n){return o.assignmentExpression(c.OPERATOR.equal,t.createVueRefMemberExp(e),n)},t.createVueReactiveDeclarator=function(e,t){return i.createVariableDeclarator(e,s(t))},t.createVueRefDeclarator=function(e,t){return i.createVariableDeclarator(e,u(t))},t.createVueWatchCallExp=function(e){var t=e.dependencies,n=e.callback,a=e.watchOptions,u=e.cleanupCallback,s=o.arrayPattern(t),f=o.arrayExpression(t),d=a?[i.createObjectExpression(a)]:[],p=u?[s,o.identifier(c.VUE_PREV),o.identifier(c.VUE_ON_CLEANUP)]:[s],E=o.arrowFunctionExpression(p,n.body);if(u){var m=function(e,t){var n=l(t);return i.updateArrowFunctionBody(e,(function(e){var t=e.filter((function(e){return"ReturnStatement"!==e.type}));return[].concat(r(t),[o.expressionStatement(n)])}))}(E,u);return i.createCallExp(c.VUE_WATCH,[f,m].concat(d))}return i.createCallExp(c.VUE_WATCH,[f,E].concat(d))}}},[[436,1,2]]]);
//# sourceMappingURL=main.6b85bba4.chunk.js.map