import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { RickButton } from "./RickButton"

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ПРИКЛЮЧЕНИЯ НА ГОРИЗОНТЕ</h1>
      <p>Чего же Вы ждёте?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          РЕГИСТРАЦИЯ
        </Button>
        <RickButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
	        target='_blank'

        >
          СМОТРЕТЬ РОЛИК <i className='far fa-play-circle' />
        </RickButton>
      </div>
    </div>
  );
}

export default HeroSection;
