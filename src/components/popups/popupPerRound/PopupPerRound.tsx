import ExitButton from '../../UI/moreNavigation/exitButton/ExitButton'
import './PopupPerRound.css'

interface IPopupPerRoundProps {
  rightAnswers: number,
  wrongAnswers: number,
  stateHeader: (state: boolean) => void,
}

const PopupPerRound = ({ rightAnswers, wrongAnswers, stateHeader }: IPopupPerRoundProps) => {

  return(
    <div className="popup-per-round__wrapper">
      <div className="popup-per-round__inner">
        <h2>Правильных ответов: {rightAnswers}</h2>
        <br />
        <h2>Неправильных ответов: {wrongAnswers}</h2>
        <br />
        <br />
        <br />
        <ExitButton stateHeader={stateHeader}/>
      </div>
    </div>
  )
}

export default PopupPerRound