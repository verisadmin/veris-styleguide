import React from "react";

import EventSeatOutlinedIcon from "@material-ui/icons/EventSeatOutlined";
import DesktopWindowsOutlinedIcon from "@material-ui/icons/DesktopWindowsOutlined";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import SpeakerOutlinedIcon from "@material-ui/icons/SpeakerOutlined";
import WifiOutlinedIcon from "@material-ui/icons/WifiOutlined";
import SettingsEthernetOutlinedIcon from "@material-ui/icons/SettingsEthernetOutlined";
import FreeBreakfastOutlinedIcon from "@material-ui/icons/FreeBreakfastOutlined";
import ImportantDevicesOutlinedIcon from "@material-ui/icons/ImportantDevicesOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";

import { joinCSSClass } from "components/utils";

const Speakers = SpeakerOutlinedIcon;
const PC = ImportantDevicesOutlinedIcon;
const TV = LiveTvOutlinedIcon;
const WiFi = WifiOutlinedIcon;
const Lan = SettingsEthernetOutlinedIcon;
const Projector = VideocamOutlinedIcon;
const Monitor = DesktopWindowsOutlinedIcon;
const Coffee = FreeBreakfastOutlinedIcon;
const Seating = EventSeatOutlinedIcon;

export const WiFiIcon = (props) => {
    return <WiFi className={joinCSSClass(props.classes)} />;
};

export const ProjectorIcon = (props) => {
    return <Projector className={joinCSSClass(props.classes)} />;
};

export const SpeakersIcon = (props) => {
    return <Speakers className={joinCSSClass(props.classes)} />;
};

export const PCIcon = (props) => {
    return <PC className={joinCSSClass(props.classes)} />;
};

export const MonitorIcon = (props) => {
    return <Monitor className={joinCSSClass(props.classes)} />;
};

export const LanIcon = (props) => {
    return <Lan className={joinCSSClass(props.classes)} />;
};

export const DotIcon = (props) => {
    return (
        <svg
            className={joinCSSClass(props.classes)}
            xmlns={"http://www.w3.org/2000/svg"}
            fill={"none"}
            viewBox={"0 0 24 24"}
        >
            <circle cx={"12"} cy={"12"} r={"10"} strokeWidth={"0"} />
        </svg>
    );
};

export const TVIcon = (props) => {
    return <TV className={joinCSSClass(props.classes)} />;
};

export const CoffeeIcon = (props) => {
    return <Coffee className={joinCSSClass(props.classes)} />;
};

export const SeatingIcon = (props) => {
    return <Seating className={joinCSSClass(props.classes)} />;
};
