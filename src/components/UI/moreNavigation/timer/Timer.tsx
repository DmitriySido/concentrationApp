import React, { useState, useEffect } from 'react';
import './Timer.css'
import PopupPerRound from '../../../popups/popupPerRound/PopupPerRound'

interface ITimerProps {
  rightAnswers: number,
  wrongAnswers: number,
  stateHeader: (state: boolean) => void,
}

const Timer = ({rightAnswers, wrongAnswers, stateHeader}: ITimerProps) => {
  const [timer, setTimer] = useState(45)

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        prevTimer === 1 && clearInterval(countdown)
        return prevTimer - 1
      });
    }, 1000)

    return () => clearInterval(countdown)
  }, [])

  return(
    <>
      <div className='timer'>{timer}</div>
      {timer === 0 && <PopupPerRound rightAnswers={rightAnswers} wrongAnswers={wrongAnswers} stateHeader={stateHeader}/>}
    </>
  )
}

export default Timer