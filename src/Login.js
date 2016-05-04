    require("./style.scss");

import React from "react";

export default class Login extends React.Component {
    constructor() {
        super(); 
    }
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
        var uname = "jeff@focus21.io"
        if (event.target.value === uname) {
            this.props.updateState(true);
        }
        else {
            this.props.updateState(false);
        }
    }

    render() {
        return ( 
            <input 
            onFocus={this.clear} 
            onBlur={this.reset} 
            onKeyUp={this.handleChange.bind(this)} 
            className="userIn__email" type="text" defaultValue="EMAIL" id="user__email"/>
        );
    }
}