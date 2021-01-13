import React from "react";

function FullPageLoader() {
    return (
        // THESE classes area already loaded with SSPA
        <div className={"vrs-loader-container"}>
            <div className={"vrs-loader"}></div>
            <div className={"vrs-loader-logo"}>
                <img src="/assets/images/logo.png" />
            </div>
        </div>
    );
}

export default FullPageLoader;
