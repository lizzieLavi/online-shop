import React from "react";
import './form_input.styles.scss'

const FormInput = ({handleChange,lable,...otherProps}) =>
(
    <div className='group'>
        <input className='form_input'  onChange={handleChange} {...otherProps}/>
        {lable? <label className= {otherProps.value.length ? 'shrink form_input_label' : 'form_input_label' }> 
        {lable} 
        </label>: null}
    </div>

)

export default FormInput;