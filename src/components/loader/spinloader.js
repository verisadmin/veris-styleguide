import React from "react";
import Spin from "antd/es/spin";

function SpinLoader() {
    return (
        <span className={"float-left"}>
            <Spin />
        </span>
    );
}

export default SpinLoader;
