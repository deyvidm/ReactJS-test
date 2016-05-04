require("./style.scss");

import React from "react";

export default class Login2 extends React.Component {

    render() {
        return ( 
            <div className="userIn__success">
                 <img src="img/jeff.png" className="jeff centerHor"/>
                 <p className="userIn__success--name"> Jeffery Aramini </p> 
                 <p className="userIn__success--email"> jeff@focus21.io </p>
            </div>
        );
    }
}