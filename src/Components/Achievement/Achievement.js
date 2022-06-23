import './Achievement.css';

function Achievement(props) {
    return (
        <>
            <div className='achievement-card'>
                <img
                    className='achievement-image'
                    src={props.src}
                    alt='project' />
                <h1 className='achievement-h' >{props.header}</h1>
                <p className='achievement-discription'>
                    {props.p}
                </p>
            </div>
        </>
    );
}

export default Achievement;