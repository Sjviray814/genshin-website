import React, {useState} from 'react';
import './Form.css'
import Textbox from './Textbox/Textbox.js'

const Form = () => {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    function getText(){
        console.log(input1, input2);
    }

    return (
        <div className="form">
            <Textbox 
             value={input1}
             onChange={setInput1} 
             width="400px" 
             height="40px"/>
             
            <input type="button" onClick={getText}></input>
        </div>

    )
}

export default Form;