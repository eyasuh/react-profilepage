import './Contacts.css';

function Contacts() {
    return (
        <section className='contacts'>
            <h4>Contact me</h4>
            <form className='contact-form' action="#" method="post">
                <label>
                    Name
                    <input className="name" type="text" placeholder="name" />
                </label>
                <label>
                    Email
                    <input className="email" type="email" required placeholder="user@email.com" />
                </label>
                <label>
                    Subject 
                    <input className='subject' />
                </label>
                <label>
                    Message
                    <textarea className='message' type='text' placeholder='Message'/>
                </label>
            
                <button type="submit">Send</button>
            </form>
            <section className='address'>
                <div>
                    <h2>Phone</h2>
                    <h4>240-515-5855</h4>
                </div>
                <div>
                    <h2>Email</h2>
                    <h4>eyasu@me.com</h4>
                </div>
            </section>
        </section>
    );
}

export default Contacts;