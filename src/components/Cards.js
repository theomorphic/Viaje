
import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

function Cards() {
  return (
    <div className='cards'>
      <h1>Наши лучшие предложения:</h1>
      <div className="cards__container">
	<div className="cards__wrapper">
	<ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Исследуйте скрытый водопад в глубине джунглей Джуманджи'
              label='Приключение'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Путешествие по островам Бали в частном круизе'
              label='Роскошь'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Прокатитесь по неизведанным водам Атлантического океана'
              label='Тайна'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Сыграйтк в футбол на вершине Гималайских гор'
              label='Приключение'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Прокатитесь по пустыне Сахара на верблюдах'
              label='Адреналин'
              path='/sign-up'
            />
          </ul>
	</div>
      </div>
    </div>
  )
}

export default Cards
