import './Contacts.css';

function Contacts() {
    return (
        <section className='contacts'>
            <h4>Contact me</h4>
            <form action="#" method="post">
                <label>
                    Name
                    <input name="name" type="text" placeholder="name" />
                </label>
                <label>
                    Email
                    <input name="email" type="email" required placeholder="user@email.com" />
                </label>
                <label>
                    Message
                    <textarea placeholder="Send me a message." cols="30" rows="10"></textarea>
                </label>
                <label>
                    PDF File
                    <input type="file" accept="PDF/*" multiple/>
                </label>

                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contacts;