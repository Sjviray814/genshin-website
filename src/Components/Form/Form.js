import React from 'react';
import Textbox from './Textbox/Textbox.js'

const Form = () => {

    const getText = () =>{
        console.log(document.getElementById('box1').value);
    }

    return (
        <div className="form">
            < Textbox id="box1"/>
            < Textbox/>
            <input type="button" onclick={getText}>Get Text</input>
        </div>

    )
}

export default Form;