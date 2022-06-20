import './ContainedButton.css';

function ContainedButton(props) {

    return (
        <a className='contactMe-link' href='#'>
           {props.buttonName}
        </a>
    );
}




export default ContainedButton; 