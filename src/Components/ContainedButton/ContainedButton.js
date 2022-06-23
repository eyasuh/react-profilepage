import './ContainedButton.css';
import {useState} from 'react'; 

function ContainedButton(props) {
    const [emoji, setEmoji] = useState();
    return (
        <a className='contactMe-link' 
        href={props.href} 
        onMouseOver={() => setEmoji(props.emojis)}
        onMouseLeave={() => setEmoji('')}
        >
           {props.buttonName} {emoji}
        </a>
    );
}




export default ContainedButton; 