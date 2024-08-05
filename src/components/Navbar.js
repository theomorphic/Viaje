import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false)
	const [button, setButton] = useState(true);

	const handleClick = ()=> setClick(!click);
	const closeMobileMenu = ()=> setClick(false);

	const showButton = () =>{
		if(window.innerWidth <= 960){
			setButton(false)
		} else{
			setButton(true);
		}
	};

	useEffect(()=>{
		showButton()
	}, []);

	
	
	window.addEventListener('resize', showButton);

	return (
		<>
		  <nav className='navbar'>
		    <div className='navbar-container'>
		      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
		      	VIAJE
			< i className="fa-solid fa-anchor" />
		      </Link>
		      <div className='menu-icon' onClick={handleClick}>
			<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
		      </div>
		      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
			{/* <li className='nav-item'>
			  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
			    О компании
			  </Link>
			</li> */}
			<li className='nav-item'>
			  <Link
			    to='/company'
			    className='nav-links'
			    onClick={closeMobileMenu}
			  >
			    О компании
			  </Link>
			</li>
			<li className='nav-item'>
			  <Link
			    to='/services'
			    className='nav-links'
			    onClick={closeMobileMenu}
			  >
			    Услуги
			  </Link>
			</li>
			<li className='nav-item'>
			  <Link
			    to='/products'
			    className='nav-links'
			    onClick={closeMobileMenu}
			  >
			    Поиск туров
			  </Link>
			</li>
	    
			<li>
			  <Link
			    to='/sign-up'
			    className='nav-links-mobile'
			    onClick={closeMobileMenu}
			  >
			    Регистрация
			  </Link>
			</li>
		      </ul>
		      {button && <Button buttonStyle='btn--outline'>РЕГИСТРАЦИЯ</Button>}
		    </div>
		  </nav>
		</>
	      );
	    }

export default Navbar
