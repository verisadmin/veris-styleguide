import React from "react";
import BaseLoader from "../base";
class Loading extends React.Component {
    render() {
        return (
            <BaseLoader
                title={"Loading Data"}
                subtitle={" Please Wait"}
                iconComponent={
                    <img
                        src="/assets/images/loading.gif"
                        className={"max-w-full h-64"}
                    />
                }
                hasResetButton={false}
                resetButtonComponent={<></>}
            />
        );
    }
}

export default Loading;
