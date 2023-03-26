import React from "react";
import Buttons from "./buttons";
import './static/css/main.css';

class Panel extends React.Component {
    render(){
        return(
            <div className="Panel">
                <Buttons />
            </div>
        )
    }
}

export default Panel;
