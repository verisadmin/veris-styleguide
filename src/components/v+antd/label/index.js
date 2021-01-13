import React from "react";
import "./styles.css";
const Label = React.memo((props) => {
    return (
        <div className="vrs-label" {...props}>
            {props.children}
        </div>
    );
});

export default Label;
