import React from 'react';
import styles from './Input.module.scss';


function Input(props) {
    return (
        <div>
           <input onChange={(event) => props.setValue(event.target.value)} value={props.value} className={styles.input} type={props.type} placeholder={props.placeholder} /> 
        </div>
    );
};

export default Input;
