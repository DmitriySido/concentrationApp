import { IAnswers } from "../../utils/interfaces"
import ExitButton from "./exitButton/ExitButton"
import Timer from "./timer/Timer"

interface IMoreNavigationProps extends IAnswers {
  stateHeader: (state: boolean) => void,
  buttonClassName?: string
}

const MoreNavigation = ({ stateHeader, rightAnswers, wrongAnswers, buttonClassName}: IMoreNavigationProps) => {

  return(
    <div className='more-navigation'>
      <ExitButton stateHeader={stateHeader} buttonClassName={buttonClassName}/>
      <Timer rightAnswers={rightAnswers} wrongAnswers={wrongAnswers} stateHeader={stateHeader}/>
    </div>
  )
}

export default MoreNavigation