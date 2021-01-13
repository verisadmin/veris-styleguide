import React from "react";
import { Button } from "components/v+antd";
import { ReactComponent as NoSearchIcon } from "assets/images/no_search.svg";
import BaseLoader from "../base";

class NoSearchResults extends React.Component {
    render() {
        return (
            <BaseLoader
                title={"No search results"}
                subtitle={"Your search returned 0 results"}
                iconComponent={<NoSearchIcon />}
                hasResetButton={this.props.hasResetButton || false}
                resetButtonComponent={
                    <Button
                        type={"primary"}
                        label="Clear search"
                        onClick={() =>
                            this.props.handleSearch(
                                {
                                    field: "",
                                    value: "",
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

export default NoSearchResults;
