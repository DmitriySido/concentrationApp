import ExitButton from '../../UI/moreNavigation/exitButton/ExitButton'
import { IAnswers } from '../../utils/interfaces'
import './PopupPerRound.css'

interface IPopupPerRoundProps extends IAnswers{
  stateHeader: (state: boolean) => void,
}

const PopupPerRound = ({ rightAnswers, wrongAnswers, stateHeader }: IPopupPerRoundProps) => {

  return(
    <div className="popup-per-round__wrapper">
      <div className="popup-per-round__inner">
        <h2>Правильных ответов: {rightAnswers}</h2>
        <br />
        <h2>Неправильных ответов: {wrongAnswers}</h2>

        <ExitButton stateHeader={stateHeader} buttonClassName={'popup-button-exit'}/>
      </div>
    </div>
  )
}

export default PopupPerRound