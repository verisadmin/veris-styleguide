import React from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { joinCSSClass } from "components/utils";

export const VenueLocationIcon = (props) => {
    return <LocationOnOutlinedIcon className={joinCSSClass(props.classes)} />;
};
