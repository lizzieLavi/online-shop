import './custom_button.styles.scss'
import React from 'react';

const CustomButton = ({children,isGoogleSignIn,...otherProps}) =>
(
   <button className={`${isGoogleSignIn? 'google_sign_in': '' } custom_button`} {...otherProps} >
       {children}
   </button>
)

export default CustomButton;