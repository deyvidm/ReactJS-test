require("./style.scss");

import React from "react";
import ReactDOM from "react-dom"

class Login extends React.Component {
    render() {
        return ( 
            <div class="main" id="main"> 
                <p> asdf </p>
            </div>
        )
    }
}

const app = document.getElementById("app");

ReactDOM.render(<Input/>, app);