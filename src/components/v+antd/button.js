import React from "react";
import PropTypes from "prop-types";

import AntdButton from "antd/es/button/button";

import Tooltip from "./tooltip";

class Button extends React.Component {
    renderButton = () => {
        return (
            <AntdButton
                icon={this.props.icon}
                loading={this.props.loading}
                onClick={this.props.onClick}
                className={`rounded ${this.props.className}`}
                type={this.props.type}
            >
                {this.props.label}
            </AntdButton>
        );
    };
    render() {
        return (
            <>
                {this.props.tooltip ? (
                    <Tooltip title={this.props.tooltip}>
                        {this.renderButton()}
                    </Tooltip>
                ) : (
                    this.renderButton()
                )}
            </>
        );
    }
}

Button.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.element,
    tooltip: PropTypes.string,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
