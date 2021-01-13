import React from "react";

import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CollectionsBookmarkOutlinedIcon from "@material-ui/icons/CollectionsBookmarkOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import TabletAndroidIcon from "@material-ui/icons/TabletAndroid";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import BlockIcon from "@material-ui/icons/Block";

import { CleaningSparyIcon } from "./cleaningSpray";
import { VenueLocationIcon } from "./venueLocation";
import {
    WiFiIcon,
    ProjectorIcon,
    SpeakersIcon,
    PCIcon,
    MonitorIcon,
    LanIcon,
    DotIcon,
    TVIcon,
    CoffeeIcon,
    SeatingIcon,
} from "./amenities";

function getAmenityIconbyLabel(label, classList) {
    switch (label) {
        case "Projector":
            return <ProjectorIcon classes={classList} />;
        case "Coffee Machine":
            return <CoffeeIcon classes={classList} />;
        case "Wifi":
            return <WiFiIcon classes={classList} />;
        case "Speakers":
            return <SpeakersIcon classes={classList} />;
        case "Television":
            return <TVIcon classes={classList} />;
        case "Lan":
            return <LanIcon classes={classList} />;
        case "PC":
            return <PCIcon classes={classList} />;
        case "Monitor":
            return <MonitorIcon classes={classList} />;
        case "Seating":
            return <SeatingIcon classes={classList} />;
        default:
            return <DotIcon classes={classList} />;
    }
}

const ReadEmailAt = MailOutlineOutlinedIcon;
const PhoneIcon = PhoneOutlinedIcon;
const CloseIcon = HighlightOffOutlinedIcon;
const BinIcon = DeleteOutlinedIcon;
const AddIcon = AddCircleOutlineOutlinedIcon;
const CalendarAdd1 = EventAvailableOutlinedIcon;
const Check1Icon = CheckCircleOutlineOutlinedIcon;
const SingleNeutralIcon = FaceOutlinedIcon;
const PencilIcon = CreateOutlinedIcon;
const CalendarCheck1 = EventAvailableOutlinedIcon;
const MinusIcon = RemoveCircleOutlineOutlinedIcon;
const DownIcon = KeyboardArrowDownOutlinedIcon;
const DateRangeIcon = DateRangeOutlinedIcon;
const ReloadIcon = RefreshOutlinedIcon;
const UsergroupIcon = GroupOutlinedIcon;
const TabletIcon = TabletAndroidIcon;
const ViewIcon = VisibilityOutlinedIcon;
const BookingIcon = CollectionsBookmarkOutlinedIcon;
const InfoIcon = InfoOutlinedIcon;
const NotAllowedIcon = BlockIcon;

export {
    getAmenityIconbyLabel,
    CleaningSparyIcon,
    VenueLocationIcon,
    DotIcon,
    ReadEmailAt,
    PhoneIcon,
    CloseIcon,
    CalendarAdd1,
    BinIcon,
    AddIcon,
    Check1Icon,
    SingleNeutralIcon,
    DateRangeIcon,
    MinusIcon,
    DownIcon,
    ReloadIcon,
    UsergroupIcon,
    PencilIcon,
    CalendarCheck1,
    SeatingIcon,
    TabletIcon,
    ViewIcon,
    ScheduleOutlinedIcon,
    BookingIcon,
    InfoIcon,
    NotAllowedIcon,
};
