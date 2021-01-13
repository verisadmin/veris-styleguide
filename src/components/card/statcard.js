import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "components/v+antd";

function StatCardLayout(props) {
    return (
        <Row
            align={"middle"}
            justify={"center"}
            className={
                "bg-coolGray-50 border border-coolGray-200 text-center p-2 rounded"
            }
        >
            <Col span={24}>
                <p className={"text-coolGray-500 text-sm"}>{props.title}</p>
                <p className={"text-coolGray-900 font-bold text-xl p-2"}>
                    {props.value}
                </p>
            </Col>
        </Row>
    );
}

StatCardLayout.propTypes = {
    title: PropTypes.string,
    value: PropTypes.any,
};

export default StatCardLayout;
