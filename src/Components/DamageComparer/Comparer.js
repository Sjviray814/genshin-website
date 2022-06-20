import React, {useState} from 'react';
import './Comparer.css'
import Textbox from '../Textbox/Textbox.js'
import { damageCompare } from '../../scripts';

const Comparer = () => {

    const [High1, setHigh1] = useState('');
    const [Low1, setLow1] = useState('');
    const [CRate1, setCRate1] = useState('');
    const [High2, setHigh2] = useState('');
    const [Low2, setLow2] = useState('');
    const [CRate2, setCRate2] = useState('');

    const [response, setResponse] = useState('');

    const textWidth = "4.5vw";
    const textHeight = "3.25vh";
    const textFontSize = "1.5vh";

    function compareDamage(){
        if(isNaN(High1) || isNaN(Low1) || isNaN(CRate1) || isNaN(High2) || isNaN(Low2) || isNaN(CRate2)){
            setResponse('Please make sure that you only enter valid numbers');
            
        }
        else{
            let compared = damageCompare(parseFloat(High1), parseFloat(Low1), parseFloat(CRate1), parseFloat(High2), parseFloat(Low2), parseFloat(CRate2));

            if(isNaN(compared[2])){
                setResponse('Please make sure all of the boxes are filled in');
                return;
            }

            //First build is better:
            if(compared[0] > compared[1]){
                setResponse(`Build 1 is better in ${compared[0]} out of ${compared[0] + compared[1]} trials;
                build 1 is about ${Math.round(compared[2] * 10000)/100}% better than build 2`);
            }

            //Second build is better:
            else{
                setResponse(`Build 2 is better in ${compared[1]} out of ${compared[0] + compared[1]} trials;
                Build 2 is about ${Math.round(compared[2] * 10000)/100}% better than Build 1`);
            }
        }
    }
    
    function showPopup(){
        let popup = document.getElementById('popuptext');
        popup.classList.toggle('show');
    }

    return (
        <div className="comparer">

            <div className='name'> Damage Comparer 
            
            <div className='popup' onClick={showPopup}>ⓘ 
                    <span className='popuptext' id='popuptext'>Use this to compare damage of different builds.  When testing in game, record the crit and non crit hit damage for the same ability of a character. (Ex: Hu Tao vape charge atk) Make sure it is against the same enemy, with same buffs, same elemental reaction etc.  Switch builds and do the same.  Record the crit rate in decimal form for each build as well.</span>
                </div>
            
            </div>


            <div className='build1'>Build 1:</div>
            <div className='textboxes'>
            <Textbox 
             value={High1}
             onChange={setHigh1} 
             width={textWidth}
             height={textHeight}
             placeholder="Crit"
             fontSize={textFontSize}
             />

            <Textbox 
             value={Low1}
             onChange={setLow1} 
             width={textWidth}
             height={textHeight}
             placeholder="Non-Crit"
             fontSize={textFontSize}
             />

            <Textbox 
             value={CRate1}
             onChange={setCRate1} 
             width={textWidth}
             height={textHeight}
             placeholder="Crit Rate"
             fontSize={textFontSize}
             />
             </div>


            <div className='build1'>Build 2:</div>
            <div>
            <Textbox 
             value={High2}
             onChange={setHigh2} 
             width={textWidth}
             height={textHeight}
             placeholder="Crit"
             fontSize={textFontSize}
             />

            <Textbox 
             value={Low2}
             onChange={setLow2} 
             width={textWidth}
             height={textHeight}
             placeholder="Non-Crit"
             fontSize={textFontSize}
             />

            <Textbox 
             value={CRate2}
             onChange={setCRate2} 
             width={textWidth}
             height={textHeight}
             placeholder="Crit Rate"
             fontSize={textFontSize}
             />
             </div>

            <input type="button" value="Compare!" className='compare' onClick={compareDamage}></input>

            <div className='response'>{response}</div>
        </div>

    )
}

export default Comparer;