require("./style.scss");

import React from "react";
import ReactDOM from "react-dom";

import Login from "./Login.js";
import Login2 from "./Login2.js";
import Password from "./Password.js";
import Final from "./Final.js";

class MainLogin extends React.Component {
    constructor() {
        super();
        this.state = { isJeff: false, pass : "init", loggedIn: false};
    }

    updateState(is_jeff) {
        this.setState({isJeff : is_jeff});
    }

    updatePass(new_pass) {
        this.setState({pass : new_pass});
    }

    submit(e) {
        e.preventDefault();
        if (this.state.isJeff && this.state.pass == "makeithappen") {
            this.setState({loggedIn: true});
        }
        else { 
            var input = window.document.getElementById("user__pass");
            input.className += " shake--pass";
            setTimeout(function(){ 
                input.className = input.className.replace(" shake--pass","")
            }, 500);
        }
    }

    
    render() {
        if (!this.state.loggedIn) {
            var login = <Login updateState={this.updateState.bind(this)}/>
            var pass = <Password updatePass={this.updatePass.bind(this)}/>
            var btn_text = "NEXT";

            if (this.state.isJeff) {
                login = <Login2/>;
                btn_text = "SIGN IN";
                var thumb = <img src="img/logo-thumb.png" alt="logo-thumb" className="logo"/>
            }

            return ( 
                <div className="wrapper">
                    <div className="main" id="main"> 
                        {login}
                        {pass}
                        <button className="userIn__button" id="user__button" onClick={this.submit.bind(this)} type="button"> {btn_text} </button>
                        <p className="userIn__help"> Need Help? </p>
                    </div>
                    {thumb}
                </div>
            );
        }

        else if (this.state.loggedIn) {
            return ( 
                <Final/>
            );
        }
    }
}

const app = document.getElementById("app");

ReactDOM.render(<MainLogin/>, app);
