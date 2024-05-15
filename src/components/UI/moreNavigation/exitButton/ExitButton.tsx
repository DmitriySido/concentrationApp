import { Link } from 'react-router-dom';
import './ExitButton.css'
import React, { useState, useEffect } from 'react';

interface IExitButtonProps {
  stateHeader: (state: boolean) => void;
}


const ExitButton = ({ stateHeader }: IExitButtonProps) => {

  useEffect(() => {
    stateHeader(false)  // Меняем состояние sidePanelNavigation при загрузке страницы
  }, [stateHeader])
    
  const buttonExit = () => stateHeader(true)

  return(
    <Link to='/' className='exit-button' onClick={buttonExit}>Выйти</Link>
  )
}

export default ExitButton