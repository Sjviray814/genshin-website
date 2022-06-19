import React, {useState} from 'react';
import './CritComparer.css'
import Textbox from '../Textbox/Textbox.js'
import {averageDamage, damageCompare, averageCrit, critCompare, calculate, normalize, normalize2} from '/Users/sjviray/genshin-website/src/scripts.js'

const CritComparer = () => {

    const [CRate1, setCRate1] = useState('');
    const [CDMG1, setCDMG1] = useState('');
    const [CRate2, setCRate2] = useState('');
    const [CDMG2, setCDMG2] = useState('');

    const [response, setResponse] = useState('');

    const textWidth = "4.5vw";
    const textHeight = "3.25vh";
    const textFontSize = "1.5vh";



    function findBetterCrit(){
        if(isNaN(CRate1) || isNaN(CDMG1) || isNaN(CRate2) || isNaN(CDMG2)){
            setResponse('Please make sure that you only enter valid numbers');
            
        }
        else{
            let compared = critCompare(CRate1, CDMG1, CRate2, CDMG2);

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


    return (
        <div className="critComparer">

            <div className='name2'>Crit Comparer</div>


            <div className='build2'>Build 1:</div>
            <div className='textboxes3'>
            <Textbox 
             value={CRate1}
             onChange={setCRate1} 
             width={textWidth}
             height={textHeight}
             placeholder="Crit Rate"
             fontSize={textFontSize}
             />

            <Textbox 
             value={CDMG1}
             onChange={setCDMG1} 
             width={textWidth}
             height={textHeight}
             placeholder="Crit DMG"
             fontSize={textFontSize}
             />
             </div>


            <div className='build2'>Build 2:</div>
            <div>
            <Textbox 
             value={CRate2}
             onChange={setCRate2} 
             width={textWidth}
             height={textHeight}
             placeholder="Crit Rate"
             fontSize={textFontSize}
             />

            <Textbox 
             value={CDMG2}
             onChange={setCDMG2} 
             width={textWidth}
             height={textHeight}
             placeholder="Crit DMG"
             fontSize={textFontSize}
             />
             </div>

            <input type="button" value="Compare!" className='compare2' onClick={findBetterCrit}></input>

            <div className='response2'>{response}</div>
        </div>

    )
}

export default CritComparer;