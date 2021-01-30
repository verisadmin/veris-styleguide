// import "systemjs-webpack-interop/resource-query-public-path?systemjsModuleName=@veris/meeting-room";

//# REact
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

//# SSPA
import singleSpaReact from "single-spa-react";
import singleSpaCss from "single-spa-css";

import "./index.css";

import App from "./App";

const staticBase = process.env.ASSET_PATH + "static/css/";
// TODO: explore __webpack_public_path__ mechanism
// https://github.com/joeldenning/snowpack-single-spa-example/blob/c6e659ea410c87442227abe5cc39cdd05cdb4856/index.js
// const staticBase =
//   typeof __webpack_public_path__ !== "undefined"
//     ? __webpack_public_path__
//     : import.meta.url.slice(0, import.meta.url.lastIndexOf("/") + 1);

const cssLifecycles = singleSpaCss({
    cssUrls: [staticBase + "main.styleguide.css"],
});

serviceWorker.unregister();

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    errorBoundary: (err, info, props) => {
        // https://reactjs.org/docs/error-boundaries.html
        console.error(err, info, props);
        return <div>This renders when a catastrophic error occurs</div>;
    },
});

export const bootstrap = [cssLifecycles.bootstrap, reactLifecycles.bootstrap];

export const mount = [cssLifecycles.mount, reactLifecycles.mount];

export const unmount = [cssLifecycles.unmount, reactLifecycles.unmount];

// EXPORT components
export * from "components";
