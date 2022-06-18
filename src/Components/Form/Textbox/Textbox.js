import React, {useState} from 'react';


const Textbox = ({value, onChange, width, height}) => {

    const textboxStyle = {
        width: width,
        height:height
    }

    return(
        <input type="text" 
        value={value} 
        onChange={e => onChange(e.target.value)}
        style={textboxStyle}></input>
    )
}


export default Textbox;