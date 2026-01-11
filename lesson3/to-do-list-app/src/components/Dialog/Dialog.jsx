import React from 'react';
import './Dialog.css';
function Dialog({ backgroundColor , onClose, children}) {
    const dialogStyle = { backgroundColor: backgroundColor || 'white',};
    return(
        <div className="dialog-overlay">
            <div className="dialog-content" style={dialogStyle}>
                <button className="dialog-close" onClick={onClose}>
                    &times;
                </button>
                <div className="dialog-body">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Dialog;

