import { Link } from 'react-router-dom';
import './ExitButton.css'
import React, { useEffect } from 'react';

interface IExitButtonProps {
  stateHeader: (state: boolean) => void,
  buttonClassName?: string,
}


const ExitButton = ({ stateHeader, buttonClassName = 'task-exit-button' }: IExitButtonProps) => {

  useEffect(() => {
    stateHeader(false)  // Меняем состояние sidePanelNavigation при загрузке страницы
  }, [stateHeader])
    
  const buttonExit = () => stateHeader(true)

  return(
    <Link to='/tasks' className={`exit-button ${buttonClassName}`} onClick={buttonExit}>Выйти</Link>
  )
}

export default ExitButton