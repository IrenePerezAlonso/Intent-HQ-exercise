import React, { useState } from "react";
// import './Input.css'; 

function Input(props) {
    const [initialNumber, setInitialNumber] = useState(" ");

    const handleInitialNumber = (event) => {
     
    }

    // console.log('props', props.addInitialNumber)

    return (
        <div>
            <input
            onChange={handleInitialNumber}
            placeholder="Add an initial number"
            >
            </input>
            {/* <button onClick={() => save()}>Submit</button> */}
        </div>
    )
}

export default Input;