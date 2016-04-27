require("./style.scss");

import React from "react";
import ReactDOM from "react-dom";

import Login from "./Login.js";
import Login2 from "./Login2.js";

class MainLogin extends React.Component {
    constructor() {
        super();
        this.state = { isJeff: false};
    }

    clear(event) {
        if (event.target.value === "PASSWORD") { 
            event.target.value = "";
        }
    }
    
    reset(event) {
        if (event.target.value.trim() == "") { 
            event.target.value = "PASSWORD";
        }
    }

    updateState(new_state) {
        this.setState({isJeff: new_state});
    }

    
    render() {
        var login = <Login updateState={this.updateState.bind(this)}/>
        var btn_text = "NEXT";
        if (this.state.isJeff) {
            login = <Login2/>;
            btn_text = "SIGN IN";
            var pass = window.document.getElementsByTagName('input')[1]
            pass.value = "";
            pass.focus();
            var thumb = <img src="img/logo-thumb.png" alt="logo-thumb" className="logo"/>
        }

        return ( 
            <div>
            
                <div className="main" id="main"> 
                    {login}
                    <input onFocus={this.clear} onBlur={this.reset} className="userIn__pass " type="text" defaultValue="PASSWORD"/>
                    <button className="userIn__button " type="button"> {btn_text} </button>
                    <p className="userIn__help"> Need Help? </p>
                </div>
                {thumb}
            </div>
        );
    }
}

const app = document.getElementById("app");

ReactDOM.render(<MainLogin/>, app);