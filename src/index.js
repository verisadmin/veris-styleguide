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

const isEnvProduction = process.env.NODE_ENV === "production";
const staticBase = process.env.ASSET_PATH + "static/css/";
const ASSET_UUID = process.env.ASSET_UUID;

const cssLifecycles = singleSpaCss({
    cssUrls: [staticBase + `main.styleguide.${ASSET_UUID}.css`],
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

const bootstrap = isEnvProduction
    ? [cssLifecycles.bootstrap, reactLifecycles.bootstrap]
    : [reactLifecycles.bootstrap];
const mount = isEnvProduction
    ? [cssLifecycles.mount, reactLifecycles.mount]
    : [reactLifecycles.mount];
const unmount = isEnvProduction
    ? [cssLifecycles.unmount, reactLifecycles.unmount]
    : [reactLifecycles.unmount];

export { bootstrap, mount, unmount };

// EXPORT components
export * from "components";
