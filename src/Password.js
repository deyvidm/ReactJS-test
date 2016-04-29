import React from "react";

export default class Password extends React.Component {

    clear(event) {
        if (event.target.value === "PASSWORD") { 
            event.target.value = "";
            event.target.type = "password"
        }
    }
    
    reset(event) {
        if (event.target.value.trim() == "") { 
            event.target.value = "PASSWORD";
            event.target.type = "text"
        }
    }

    handleChange(event) { 
        this.props.updatePass(event.target.value);
    }

    render() {
        return ( 
            <input onFocus={this.clear} onBlur={this.reset} onChange={this.handleChange.bind(this)} id="pass" className="userIn__pass " type="text" defaultValue="PASSWORD"/>
        );
    }
}

