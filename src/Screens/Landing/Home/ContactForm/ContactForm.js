import React, {useState, useReducer} from 'react';
import { googleFormsToJson } from 'react-google-forms-hooks';


const formReducer = (state, event) => {
    return{
        ...state,
        [event.name]: event.value
    }
}

export const ContactForm = () => {
    const [formData, setFormData] = useReducer(formReducer, {}); 
    const [firstName, lastName, email, shortAnser ] = useState(); 
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault(); 
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000);
    };

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value
        });
    }

    return(
        <div className="contact-form-container">
            {submitting && 
                <div>
                    You are submitting the following data: 
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                        ))}
                    </ul>
                </div>
            }
            <form onSubmit={handleSubmit}>
                <label>First Name:
                    <input
                        type="text" 
                        name="firstName"
                        onChange={handleChange}
                    />
                </label>
                <label>Last Name:
                    <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                    />
                </label>
                <label>Email:
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                    />
                </label>
                <label>How Can I help?
                    <input
                        type="textarea"
                        name="shortAnser"
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}