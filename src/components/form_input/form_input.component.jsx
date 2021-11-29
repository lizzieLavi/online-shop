import React from "react";
import './form_input.styles.scss'

const FormInput = ({handleChange,label,...otherProps}) =>
(
    <div className='group'>
        <input className='form_input'  onChange={handleChange} {...otherProps}/>
        {label? <label className= {otherProps.value.length ? 'shrink form_input_label' : 'form_input_label' }> 
        {label} 
        </label>: null}
    </div>

)

export default FormInput;