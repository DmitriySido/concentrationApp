import { Link } from 'react-router-dom';
import './IntroductoryPopup.css'

interface IIntroductoryPopupProps{
  updateState: (state: boolean) => void,
  secondInformation: string,
  firstInformation: string,
  taskID: string,
}

const IntroductoryPopup = ({updateState, secondInformation, firstInformation, taskID} : IIntroductoryPopupProps) => {
  const handleClick = () => { updateState(false) }

  return(
    <div className='introductory-popup__wrapper'>
      <button className='button-close'>Обратно</button>
      <div className='introductory-popup__inner'>
        <h2 className='introductory-popup__title'>{firstInformation}</h2>
        <p className='introductory-popup__subject'>{secondInformation}</p>

        <Link to={`/${taskID}`} className='button-start' onClick={handleClick}>Начать</Link>
      </div>
    </div>
  )
}

export default IntroductoryPopup