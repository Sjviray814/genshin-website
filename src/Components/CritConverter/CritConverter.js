import React, {useState} from 'react';
import './CritConverter.css'
import Textbox from '../Textbox/Textbox.js'
import {averageDamage, damageCompare, averageCrit, critCompare, calculate, normalize, normalize2} from '/Users/sjviray/genshin-website/src/scripts.js'

const CritConverter = () => {

    const [CRate, setCRate] = useState('');
    const [CDMG, setCDMG] = useState('');

    const [response, setResponse] = useState('');

    const textWidth = "4.5vw";
    const textHeight = "3.25vh";
    const textFontSize = "1.5vh";

    function convert(){
        if(isNaN(CRate) || isNaN(CDMG)){
            setResponse('Please make sure that you entered valid numbers');
        }
        else{
            let converted = normalize(CRate, CDMG);
            setResponse(`A character with ${Math.round(CRate * 1000)/10} crit rate and ${Math.round(CDMG * 1000)/10} crit damage
            would have the same damage output as a character with ${converted[0]} crit rate and ${converted[1]} crit damage` )
        }

    }


    return (
        <div className="converter">

            <div className='name'>Crit Converter</div>


            <div className='textboxes2'>
            <Textbox 
             value={CRate}
             onChange={setCRate} 
             width={textWidth}
             height={textHeight}
             placeholder="Crit Rate"
             fontSize={textFontSize}
             />

            <Textbox 
             value={CDMG}
             onChange={setCDMG} 
             width={textWidth}
             height={textHeight}
             placeholder="Crit DMG"
             fontSize={textFontSize}
             />
             </div>

            <input type="button" value="Convert!" className='convert' onClick={convert}></input>

            <div className='response3'>{response}</div>
        </div>

    )
}

export default CritConverter;