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
        if (event.keyCode == 13) {
            window.document.getElementById("user__button").click();
        }
    }

    render() {
        return ( 
            <input 
            onFocus={this.clear} 
            onBlur={this.reset} 
            onKeyUp={this.handleChange.bind(this)} 
            id="user__pass" className="userIn__pass " type="text" defaultValue="PASSWORD"/>
        );
    }
}

