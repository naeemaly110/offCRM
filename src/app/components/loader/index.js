import "./loader.css";
import React from "react";


const Loader = (props) => {
    const isVisible = props.isVisible ? '' : 'hidden';
    return (
        <div className={ isVisible +' upperloader'} >
            <div className={ isVisible +" loader"}></div>
        </div>
    );
}

export default Loader;