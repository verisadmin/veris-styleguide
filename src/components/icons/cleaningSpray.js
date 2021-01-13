import React from "react";
import OpacityOutlinedIcon from "@material-ui/icons/OpacityOutlined";

import { joinCSSClass } from "components/utils";

export const CleaningSparyIcon = (props) => {
    return <OpacityOutlinedIcon className={joinCSSClass(props.classes)} />;
};
