import React from 'react';

const Landing = () => {
    //This section needs to give a little snyopsis about you
    //You need to draw the user in with a quick bit about you and make it look good. 
    //Should be whole landign screen / must be mobile friendly. The whole stie must be. 

    const YourName = "Jacob Vig"; 
    const BioArray = ["Frontend Developer", "CMS Experienced", "Data Driven", "Collaborator"];

    const BioOutput = BioArray.map((word,i,arr) => 
        <li key={word} className="code-array-word fade-2">"{word}"
            {i !== arr.length - 1 ? <span>,</span> : false}
        </li>
    );

    return (
        <div className="landing-section">
            <div className="landing-container">
                <p className="code-snippet fade-1">const <span className="variable-color">MyNameIs</span> =</p>
                <h1 className="code-snippet-name fade-2">{YourName}<span>;</span></h1>
                <p className="code-snippet fade-1">const <span className="variable-color">BioArray</span> = [</p>
                <ul>
                    {BioOutput}
                </ul>
                <p className="code-snippet fade-1">];</p>
            </div>
        </div>
    )
}

export default Landing; 
