import React from "react";

const NavigationBar = (state) => {
    return(
        <div>
            <ul style={{ listStyle: "none", display: "flex" }}>
                <li style={{paddingRight: 10}}>Home</li>
                <li>{!state.navValue ? "About" : state.navValue}</li>
            </ul>
        </div>
    )
}   

export default NavigationBar;