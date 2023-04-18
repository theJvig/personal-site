import React from 'react'; 
import './styles/Modal.scss'; 

const Modal = (props) => {

    return(
        <dvi className="modal">
            <div className="modal-wrapper">{props.children}</div>
        </dvi>
    )
}

export default Modal; 