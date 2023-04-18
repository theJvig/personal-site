import React, { useState } from 'react'; 
import Modal from '../UI/Modal';

const DestinySigninModal = ({setIsOpen}) => {
    const [membershipType, setMembershipType ] = useState();
    const [membershipId, setMembershipId ] = useState(); 

    const membershipTypeHandler = (event) => {
        setMembershipType(event.target.value);
    }
    const membershipIdHandler = (event) => {
        setMembershipId(event.target.value);
    }

    return(
        <Modal>
            <div className="destiny-signin-modal">
                <button onClick={() => setIsOpen(false)}>Close</button>
                <form className="destiny-signin-form">
                    <div className="destiny-member-type">
                        <label>Enter Member Type</label>
                        <input type="text" onChange={membershipTypeHandler}/>
                    </div>
                    <div className="destiny-member-id">
                        <label>Enter Member Id</label>
                        <input type="text" onChange={membershipIdHandler}/>
                    </div>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        </Modal>
    );
};

export default DestinySigninModal; 