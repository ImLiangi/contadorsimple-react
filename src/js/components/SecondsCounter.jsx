import React from "react";

const SecondsCounter = ({ seconds }) => {
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary" style={{height: "100vh"}}>
            <div className="bg-primary rounded p-5" style={{fontSize: "5rem", fontWeight: "bold", minWidth: "200px", textAlign: "center", color: "white"}}>
                {seconds}
            </div>
        </div>
    );
};

export default SecondsCounter;