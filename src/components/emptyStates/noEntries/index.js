import React from "react";
import { Button } from "components/v+antd";
import { ReactComponent as NoDataIcon } from "assets/images/no_entries.svg";
import BaseLoader from "../base";

class NoEntries extends React.Component {
    render() {
        return (
            <BaseLoader
                title={"No entries"}
                subtitle={"We could not find any entries for your filters"}
                iconComponent={<NoDataIcon />}
                hasResetButton={this.props.hasResetButton || false}
                resetButtonComponent={
                    <Button
                        type={"primary"}
                        label="Reset your filters"
                        onClick={() =>
                            this.props.handleFilters(
                                {
                                    location: [],
                                    availability: "",
                                    amenities: "",
                                },
                                true
                            )
                        }
                    />
                }
            />
        );
    }
}

export default NoEntries;
