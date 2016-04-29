import React from "react";
import ReactDOM from "react-dom";


export default class Final extends React.Component {

    render() {
        return ( 
            <div className="wrapper__final">

                <div className="navbar--f21">
                    <a href="#"> <img alt="User" id="navbar--user" className="navbar__profile--f21" src="img/jeff.png"/>       </a>
                    <a href="#"> <img alt="Apps" id="navbar--apps" className="navbar__item--f21" src="img/apps.svg"/>          </a>
                    <a href="#"> <img alt="Nots" id="navbar--nots" className="navbar__item--f21" src="img/notifications.svg"/> </a>
                    <a href="#"> <img alt="Help" id="navbar--help" className="navbar__item--f21" src="img/help.svg"/>          </a>
                </div>

                <div className="centerHor app__tile__row">
                    <button className="app__tile app__tile--1"></button>
                    <button className="app__tile app__tile--2"></button>
                    <button className="app__tile app__tile--3"></button>
                </div>

                <div className="centerHor app__tile__row"> 
                    <button className="app__tile app__tile--4"></button>
                    <button className="app__tile app__tile--5"></button>
                    <button className="app__tile app__tile--6"></button>
                </div>

                <div className="centerHor app__tile__row">   
                    <button className="app__tile app__tile--7"></button>
                    <button className="app__tile app__tile--8"></button>
                    <button className="app__tile app__tile--9"></button>
                </div>

            </div>
        );
    }
}

<nav className="navbar navbar-default navbar--f21">
    <div className="container-fluid">
        
    </div>
</nav>


const navbar = document.getElementById("navbar--placeholder");

// ReactDOM.render(<Navbar/>, navbar);