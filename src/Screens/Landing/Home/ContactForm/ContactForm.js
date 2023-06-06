import React, {useState, ReactDom} from 'react';

const ContactForm = () => {

    const [firstName, lastName, email, shortAnser ] = useState(); 

    const handleSubmit = event => {
        event.preventDefault(); 
        alert('The form was submitted');
    };

    return(
        <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
                <label>First Name:
                    <input
                        type="text" 
                        value={firstName}
                        //onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label>Last Name:
                    <input
                        type="text"
                        value={lastName}
                        //onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <label>Email:
                    <input
                        type="text"
                        value={email}
                        //onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>How Can I help?
                    <input
                        type="textarea"
                        value={shortAnser}
                        //onChange={(e) => setShortAnser(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;