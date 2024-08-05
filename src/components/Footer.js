
import React from 'react'
import { Button } from './Button'
import "./Footer.css"
import { Link } from 'react-router-dom';


function Footer() {
	return (
	  <div className='footer-container'>
	    <section className='footer-subscription'>
	      <p className='footer-subscription-heading'>
	      Подпишитесь на нашу рассылку новостей, чтобы получать лучшие предложения по горячим турам
	      </p>
	      <p className='footer-subscription-text'>
	      Вы можете отписаться в любое время
	      </p>
	      <div className='input-areas'>
		<form>
		  <input
		    className='footer-input'
		    name='email'
		    type='email'
		    placeholder='Ваша почта'
		  />
		  <Button buttonStyle='btn--outline'>Подписаться</Button>
		</form>
	      </div>
	    </section>
	    <div class='footer-links'>
	      <div className='footer-link-wrapper'>
		<div class='footer-link-items'>
		  <h2>О нас</h2>
		  <Link to='/sign-up'>Как это работает</Link>
		  <Link to='/'>Отзывы</Link>
		  <Link to='/'>Работа</Link>
		  <Link to='/'>Инвесторы</Link>
		  <Link to='/'>Условия использования</Link>
		</div>
		<div class='footer-link-items'>
		  <h2>Связь с нами</h2>
		  <Link to='/'>Контакты</Link>
		  <Link to='/'>Поддержка</Link>
		  <Link to='/'>Направления</Link>
		  <Link to='/'>Стать спонсором</Link>
		</div>
	      </div>
	      <div className='footer-link-wrapper'>
		<div class='footer-link-items'>
		  <h2>Видео</h2>
		  <Link to='/'>Загрузить видео</Link>
		  <Link to='/'>Представители</Link>
		  <Link to='/'>Агенства</Link>
		  <Link to='/'>Инфлюенсеры</Link>
		</div>
		<div class='footer-link-items'>
		  <h2>Медиа</h2>
		  <Link to='/'>Instagram</Link>
		  <Link to='/'>Facebook</Link>
		  <Link to='/'>Youtube</Link>
		  <Link to='/'>Twitter</Link>
		</div>
	      </div>
	    </div>
	    <section class='social-media'>
	      <div class='social-media-wrap'>
		<div class='footer-logo'>
		  <Link to='https://www.spanishdict.com/translate/viaje' className='social-logo' target='_blank'>
		    VIAJE
		    < i className="fa-solid fa-anchor" />
		  </Link>
		</div>
		<small class='website-rights'>theomorphic © 2024</small>
		<div class='social-icons'>
		  <Link
		    class='social-icon-link facebook'
		    to='https://en.wikipedia.org/wiki/Facebook'
		    target='_blank'
		    aria-label='Facebook'
		  >
		    <i class='fab fa-facebook-f' />
		  </Link>
		  <Link
		    class='social-icon-link instagram'
		    to='https://en.wikipedia.org/wiki/Instagram'
		    target='_blank'
		    aria-label='Instagram'
		  >
		    <i class='fab fa-instagram' />
		  </Link>
		  <Link
		    class='social-icon-link youtube'
		    to='https://www.youtube.com'
		    target='_blank'
		    aria-label='Youtube'
		  >
		    <i class='fab fa-youtube' />
		  </Link>
		  <Link
		    class='social-icon-link twitter'
		    to='https://en.wikipedia.org/wiki/Twitter'
		    target='_blank'
		    aria-label='Twitter'
		  >
		    <i class='fab fa-twitter' />
		  </Link>
		  <Link
		    class='social-icon-link linkedin'
		    to='https://en.wikipedia.org/wiki/LinkedIn'
		    target='_blank'
		    aria-label='LinkedIn'
		  >
		    <i class='fab fa-linkedin' />
		  </Link>
		</div>
	      </div>
	    </section>
	  </div>
	);
      }
      
      export default Footer;
