import React, { PureComponent } from "react";

export default class CLass extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { buttonText: "chick" };
    }
    onHandleClick = () => {
        this.setState(() => {
            return { buttonText: "Thanks" };
        });
    };
    render() {
        const { buttonText } = this.state;
        return (
            <div>
                <button onClick={this.onHandleClick}>{buttonText}</button>
            </div>
        );
    }
}
