import React, {useState} from 'react';
import './CritConverter.css'
import Textbox from '../Textbox/Textbox.js'
import {averageDamage, damageCompare, averageCrit, critCompare, calculate, normalize, normalize2} from '../../scripts';

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
            let converted = normalize(parseFloat(CRate), parseFloat(CDMG));

            if(CRate == '' || CDMG == ''){
                setResponse('Please make sure all of the boxes are filled in');
                return;
            }
            setResponse(`A character with ${Math.round(CRate * 1000)/10}% crit rate and ${Math.round(CDMG * 1000)/10}% crit damage
            would have the same damage output as a character with ${converted[0]}% crit rate and ${converted[1]}% crit damage` )
        }

    }
    
    function showPopup3(){
        let popup = document.getElementById('popuptext3');
        popup.classList.toggle('show');
    }

    return (
        <div className="converter">

            <div className='name'>Crit Converter 
            
            <div className='popup3' onClick={showPopup3}>ⓘ 
                    <span className='popuptext3' id='popuptext3'>Have you wondered how much damage a 5% crit rate and 1000% crit damage build would do? Well turns out it's about the same as 51 crit rate and 102 crit damage.  You can use this tool to convert weird crit ratios to 1:2 crit ratios that makes more sense.</span>
                </div>
            

            </div>


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