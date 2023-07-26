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
    //const [firstName, lastName, email, shortAnser ] = useState(); 
    const [submitting, setSubmitting] = useState(false);
    const googleFormId = '1FAIpQLSd_P4YE2xPFUrXjJ0eLZ90pnXf0DURMOsxm5s9rI6neT7YITA';

    const handleSubmit = event => {
        event.preventDefault(); 
        console.log(formData);
        setSubmitting(true);

        const formUrl = "https://docs.google.com/forms/u/0/d/e/" + googleFormId + "/formResponse?";
        const queryURLData = new URLSearchParams(formData).toString(); 
        const formPostUrl = formUrl + queryURLData; 
        const requestOptions = {
            method: "POST",
            mode: "no-cors",
            headers: {"content-Type": "application/json"}
        }

        console.log(formPostUrl);

        fetch(formPostUrl, requestOptions)
            .then(response => {
                if(response.status === 200){
                    console.log('SUCCESS!!!!');
                } else { 
                    console.log('Failed');
                    console.log(response.status);
                    
                }
            }).then((data) => {
                setSubmitting(false); 
            }); 
    };

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
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
                <input 
                    class="input" 
                    type="text"
                    name="entry.1830454949"
                    placeholder="First Name"
                    onChange={handleChange}
                />
                <input 
                    class="input" 
                    type="text"
                    name="entry.613580766" 
                    placeholder="Last Name" 
                    onChange={handleChange}
                />
                <input 
                    class="input"
                    type="text"
                    name="entry.47438426"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <textarea 
                    class="input"
                    type="textarea"
                    name="entry.1631848909"
                    placeholder="How Can I help?"
                    onChange={handleChange}
                />
                <button class="button" type="submit" >
                    Submit
                </button>
            </form>
        </div>
    )
}