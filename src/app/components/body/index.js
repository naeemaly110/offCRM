import React from "react";
import Sidebar from "../sidebar";

const Body = () => {

    return (
        <div className="main-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                            <Sidebar/>
                    </div>
                    <div className="col-sm-9">
                            content area
                    </div>                    
                </div>
            </div>
        </div>
    );

}
export default Body;