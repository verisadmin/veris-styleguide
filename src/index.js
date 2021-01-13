// import "systemjs-webpack-interop/resource-query-public-path?systemjsModuleName=@veris/meeting-room";

//# REact
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

//# SSPA
import singleSpaReact from "single-spa-react";

import "./index.css";

import App from "./App";

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

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];

// EXPORT components
export * from "components";
