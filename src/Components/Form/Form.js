import React from 'react';
import Textbox from './Textbox/Textbox.js'

const Form = () => {

    const getText = () =>{
        console.log("hi");
    }

    return (
        <div className="form">
            < Textbox id="box1"/>
            < Textbox/>
            <input type="button" onClick={getText}></input>
        </div>

    )
}

export default Form;