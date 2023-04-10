// settings.js

import React from "react";
import '../static/css/main.css';
import { connect } from 'react-redux';
import FilterImage from "./filterImageSettings";
import RotateImg from "./rotalAngleImg";
import TextSettings from "./textSettings";
import PaintSettings from "./paintSettings";

class Settings extends React.Component {
    render() {
        return (
            <div className="Settings">
                <FilterImage />
                <RotateImg />
                <TextSettings />
                <PaintSettings />
            </div>
        )
    };
};

function mapStateToProps(state) {
    return {
        panelDisplay: state.panelDisplay
    };
};

export default connect(mapStateToProps)(Settings);
