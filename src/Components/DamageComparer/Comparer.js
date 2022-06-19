import React, {useState} from 'react';
import './Comparer.css'
import Textbox from '../Textbox/Textbox.js'

const Comparer = () => {

    const [High1, setHigh1] = useState('');
    const [Low1, setLow1] = useState('');
    const [CRate1, setCRate1] = useState('');
    const [High2, setHigh2] = useState('');
    const [Low2, setLow2] = useState('');
    const [CRate2, setCRate2] = useState('');

    const textWidth = "4.5vw";
    const textHeight = "3.25vh";
    const textFontSize = "1.5vh";


    return (
        <div className="comparer">

            <div className='name'> Damage Comparer</div>


            <div className='build1'>Build 1:</div>
            <div className='textboxes'>
            <Textbox 
             value={High1}
             onChange={setHigh1} 
             width={textWidth}
             height={textHeight}
             placeholder="High"
             fontSize={textFontSize}
             />

            <Textbox 
             value={Low1}
             onChange={setLow1} 
             width={textWidth}
             height={textHeight}
             placeholder="Low"
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
             placeholder="High"
             fontSize={textFontSize}
             />

            <Textbox 
             value={Low2}
             onChange={setLow2} 
             width={textWidth}
             height={textHeight}
             placeholder="Low"
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

            <input type="button" value="Compare!" className='compare'></input>
        </div>

    )
}

export default Comparer;