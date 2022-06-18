import React, {useState} from 'react';


const Textbox = () => {
    const [textValue, setTextValue] = useState(""); 

    const inputChange = (event) =>{
        setTextValue(event.target.value);
    }


    return(
        <input type="text" value={textValue} onChange={inputChange}></input>
    )
}


export default Textbox;