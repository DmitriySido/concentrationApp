import ExitButton from "./exitButton/ExitButton"
import Timer from "./timer/Timer"

interface IMoreNavigationProps {
  stateHeader: (state: boolean) => void,
  rightAnswers: number,
  wrongAnswers: number,
}

const MoreNavigation = ({ stateHeader, rightAnswers, wrongAnswers}: IMoreNavigationProps) => {

  return(
    <div className='more-navigation'>
      <ExitButton stateHeader={stateHeader}/>
      <Timer rightAnswers={rightAnswers} wrongAnswers={wrongAnswers} stateHeader={stateHeader}/>
    </div>
  )
}

export default MoreNavigation