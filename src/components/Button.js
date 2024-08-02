import React from 'react'
import "./Button.css";
import { Link } from 'react-router-dom';

const STYLES = ["btn--primary", "btn--putline"]

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) =>{
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
}