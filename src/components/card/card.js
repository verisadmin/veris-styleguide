import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "components/v+antd";

import { SpinLoader } from "components/loader";

class CardLayout extends React.Component {
    render() {
        return (
            <Row className={"bg-white rounded-lg h-full w-full shadow"}>
                <Col span={22} pull={1} push={1}>
                    <Row className={"row-separator"}></Row>
                    {/* HEADING */}
                    <Row>
                        {/* CARD HEADING */}
                        <Col span={20}>
                            <h5>{this.props.title}</h5>
                            <div>
                                {/* LOADER */}
                                {this.props.isLoading && (
                                    <SpinLoader
                                        isLoading={this.props.isLoading}
                                    />
                                )}
                                {/* SUBTITLE */}
                                <div>
                                    <h6 className={"subtitle"}>
                                        {this.props.subtitle}
                                    </h6>
                                </div>
                            </div>
                        </Col>
                        {/* ACTION */}
                        <Col span={4}>
                            <div className={"float-right"}>
                                {this.props.isActionable &&
                                    this.props.actionComponent}
                            </div>
                        </Col>
                    </Row>
                    <Row className={"row-separator"}></Row>
                    <hr className={"border-solid border-coolGray-200"}></hr>
                    <Row className={"row-separator"}></Row>
                    {/* CONTENT */}
                    <Row>
                        <Col span={24}>
                            {this.props.isLoading ? (
                                <SpinLoader />
                            ) : (
                                this.props.children
                            )}
                        </Col>
                    </Row>
                    <Row className={"row-separator"}></Row>
                </Col>
            </Row>
        );
    }
}

CardLayout.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isActionable: PropTypes.bool.isRequired,
    children: PropTypes.element,
    actionComponent: PropTypes.element,
};

export default CardLayout;
