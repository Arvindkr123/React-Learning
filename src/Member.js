import React from "react";

function Members(props){
    return(
        <div>
            <h2>Members Component</h2>
            <button onClick={props.data}>Call from App data</button>
        </div>
    )
}

export default Members;