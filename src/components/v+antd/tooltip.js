import React from "react";
import RcTooltip from "rc-tooltip";

class Tooltip extends React.Component {
    render() {
        return (
            <RcTooltip
                transitionName="rc-tooltip-zoom"
                placement={"bottom"}
                overlay={<span>{this.props.title}</span>}
                destroyTooltipOnHide={true}
                defaultVisible={false}
                trigger={["hover"]}
                // mouseEnterDelay={0.1}
                // mouseLeaveDelay={0.1}
            >
                {this.props.children}
            </RcTooltip>
        );
    }
}

export default Tooltip;
