require("./style.scss");

import React from "react";

export default class Login extends React.Component {
    clear(event) {
        if (event.target.value === "EMAIL") {
            event.target.value = "";    
        }
    }

    reset(event) {
        if (event.target.value.trim() == "") { 
            event.target.value = "EMAIL";
        }
    }

    handleChange(event) {
        if (event.target.value === "jeff@focus21.io") {
            this.props.updateState(true);
        }
        else {
            this.props.updateState(false);
        }
    }

    render() {
        return ( 
            <input onFocus={this.clear} onBlur={this.reset} onChange={this.handleChange.bind(this)} className="userIn__email" type="text" defaultValue="EMAIL"/>
        );
    }
}