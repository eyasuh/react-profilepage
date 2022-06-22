import './OutlinedButton.css';
import {useState} from 'react';

function OutlinedButton(props) {
    const [name, setName] = useState('');

    return (
        <>
            <a className='resume-link' onClick={() => setName(props.sem)} href={props.href} >
                {props.buttonName} 
            </a>     
        </>
    ); 
} 

export default OutlinedButton; 