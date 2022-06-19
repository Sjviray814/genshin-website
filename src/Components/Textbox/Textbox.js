import React, {useState} from 'react';


const Textbox = ({value, onChange, width, height, placeholder, fontSize}) => {

    const textboxStyle = {
        width: width,
        height:height,
        fontSize: fontSize
    }

    return(
        <input type="text" 
        value={value} 
        onChange={e => onChange(e.target.value)}
        style={textboxStyle}
        placeholder={placeholder}></input>
    )
}


export default Textbox;