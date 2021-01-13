import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "components/v+antd";

class BaseLoader extends React.Component {
    render() {
        return (
            <Row
                justify={"space-around"}
                align={"middle"}
                className={"text-center"}
            >
                <Col span={24}>
                    <Row className={"inline-row-separator"} />
                    <Row justify={"space-around"} align={"middle"}>
                        {this.props.iconComponent}
                    </Row>
                    <Row className={"inline-row-separator"} />
                    <Row justify={"space-around"} align={"middle"}>
                        <h5>{this.props.title}</h5>
                    </Row>
                    <Row className={"inline-row-separator"} />
                    <Row justify={"space-around"} align={"middle"}>
                        <h6>{this.props.subtitle}</h6>
                    </Row>
                    <Row className={"inline-row-separator"} />
                    <Row justify={"space-around"} align={"middle"}>
                        {this.props.hasResetButton &&
                            this.props.resetButtonComponent}
                    </Row>
                    <Row className={"inline-row-separator"} />
                </Col>
            </Row>
        );
    }
}

BaseLoader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    iconComponent: PropTypes.element,
    hasResetButton: PropTypes.bool.isRequired,
    resetButtonComponent: PropTypes.element,
};

export default BaseLoader;
