import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const RickButton = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize
      }) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
	  ? buttonStyle
	  : STYLES[0];
      
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
      
	return (
	  <Link to='https://youtu.be/dQw4w9WgXcQ?si=X5IAiYVm1_aX_IQA' className='btn-mobile' target='_blank'>
	    <button
	      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
	      onClick={onClick}
	      type={type}
	    >
	      {children}
	    </button>
	  </Link>
	);
      };