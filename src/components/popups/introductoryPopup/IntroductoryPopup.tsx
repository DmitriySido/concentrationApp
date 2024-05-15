import { useState } from 'react'
import './IntroductoryPopup.css'

interface IIntroductoryPopupProps{
  updateState: (state: boolean) => void;
}

const IntroductoryPopup = ({updateState} : IIntroductoryPopupProps) => {

  const handleClick = () => {
    updateState(false);
  };

  return(
    <div className='introductory-popup__wrapper'>
      <div className='introductory-popup__inner'>
        <h2 className='introductory-popup__title'>Сравни числа и выбери большее.</h2>
        <p className='introductory-popup__subject'>Смотри на центральную точку, при этом выбирай большее число. И постарайся делать это как можно быстрее</p>

        <button className='button-start' onClick={handleClick}>Начать</button>
      </div>
    </div>
  )
}

export default IntroductoryPopup