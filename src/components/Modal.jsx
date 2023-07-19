//=========Import Globales==========
import * as React from 'react';
//=========Import Locales==========
import '../styles/modal.css';

export const Modal = props => {
     
        return <div className={props.show ? 'modalActive' : 'modal'}>
                        {props.children}
                </div>
};


export const ModalHeader = props =>{
        return <div className='modal__header'>
                {props.children}
        </div>
}

export const ModalBody = props =>{
        return <div className='modal__body'>
                {props.children}
        </div>
}

export const ModalFooter = props =>{
        return <div className='modal__footer'>
                {props.children}
        </div>
}

