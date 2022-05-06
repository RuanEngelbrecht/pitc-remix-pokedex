var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\source-control\personal\pokedex\app\root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  loader: () => loader,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/Sidebar.jsx
var import_react2 = require("@remix-run/react");
function Sidebar({ data }) {
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "2rem",
      borderRight: "1px solid lightgray",
      padding: "2rem"
    }
  }, data.map((x) => /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: `/${x.id}`,
    prefetch: "intent"
  }, /* @__PURE__ */ React.createElement("div", {
    key: x.id,
    style: {
      display: "grid",
      placeItems: "center",
      border: "1px solid lightgray",
      borderRadius: "6px",
      padding: "2rem"
    }
  }, /* @__PURE__ */ React.createElement("img", {
    src: x.image,
    alt: x.name
  }), /* @__PURE__ */ React.createElement("h2", {
    style: { margin: 0 }
  }, x.name), /* @__PURE__ */ React.createElement("p", {
    style: { margin: 0 }
  }, "#", x.id)))));
}

// models/Pokemon.js
var IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
async function getAllPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  const pokemon = data.results.map((x, i) => ({
    id: i + 1,
    name: x.name,
    image: `${IMAGE_URL}/${i + 1}.png`,
    url: x.url
  }));
  return pokemon;
}
async function getPokemon(id) {
  var _a;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  const pokemon = {
    name: data.name,
    type: (_a = data.types[0]) == null ? void 0 : _a.type.name,
    height: data.height,
    weight: data.weight,
    image: `${IMAGE_URL}/${id}.png`
  };
  return pokemon;
}

// route:C:\source-control\personal\pokedex\app\root.jsx
var meta = () => ({
  charset: "utf-8",
  title: "Remix Pokedex",
  viewport: "width=device-width,initial-scale=1"
});
async function loader() {
  const data = await getAllPokemon();
  return data;
}
function Layout({ children }) {
  const data = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "grid", gridTemplateColumns: "1fr 5fr" }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Sidebar, {
    data
  })), /* @__PURE__ */ React.createElement("div", null, children));
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react3.Meta, null), /* @__PURE__ */ React.createElement(import_react3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react3.Outlet, null)), /* @__PURE__ */ React.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react3.Scripts, null), /* @__PURE__ */ React.createElement(import_react3.LiveReload, null)));
}

// route:C:\source-control\personal\pokedex\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.4",
      padding: "2rem"
    }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to the Remix Pokedex!"), /* @__PURE__ */ React.createElement("p", null, "Select a Pokemon in the sidebar to view it's details"));
}

// route:C:\source-control\personal\pokedex\app\routes\$id.jsx
var id_exports = {};
__export(id_exports, {
  default: () => Pokemon,
  loader: () => loader2
});
var import_react4 = require("@remix-run/react");
async function loader2({ params }) {
  const id = params.id;
  const data = await getPokemon(id);
  return data;
}
function Pokemon() {
  const data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { padding: "2rem", position: "sticky", top: 0 }
  }, /* @__PURE__ */ React.createElement("h1", null, data.name), /* @__PURE__ */ React.createElement("img", {
    src: data.image,
    alt: data.name
  }), /* @__PURE__ */ React.createElement("p", null, "Type: ", data.type, " | Height: ", data.height, " | Weight : ", data.weight));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "91e5d802", "entry": { "module": "/build/entry.client-VF5KPRIN.js", "imports": ["/build/_shared/chunk-RUKMZ6LM.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-KH2A6QOE.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$id": { "id": "routes/$id", "parentId": "root", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$id-4AHU4OL4.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-Y3YVSF6J.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-91E5D802.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/$id": {
    id: "routes/$id",
    parentId: "root",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
