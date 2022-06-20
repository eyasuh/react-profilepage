import './OutlinedButton.css';

function OutlinedButton(props) {
    return (
        <>
            <a className='resume-link' href="#">{props.buttonName}</a>     
        </>
    ); 
} 

export default OutlinedButton; 