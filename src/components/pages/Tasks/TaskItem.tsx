import './TaskItem.css'
import { useState } from 'react';
import IntroductoryPopup from '../../popups/introductoryPopup/IntroductoryPopup';

interface ITaskItem {
  taskNumber: number,
  taskName: string,
  firstInformation: string,
  secondInformation: string,
  progress: number,
  taskID: string
}

function TaskItem({taskNumber, taskName, firstInformation, secondInformation, progress, taskID}: ITaskItem){
  const [popupState, setPopupState] = useState<boolean>(false)
  const [introductoryPopupState, setIntroductoryPopup] = useState<boolean>(true)

  const updateState = (newState: boolean) => { setIntroductoryPopup(newState) }
  const handleClick = () => { popupState ? setPopupState(false) :setPopupState(true) }

  return(
    <div onClick={handleClick}>
      {popupState ? <IntroductoryPopup updateState={updateState} secondInformation={secondInformation} firstInformation={firstInformation} taskID={taskID} />  : 
        <div className="task-item">
          <div className="task-item__inner">
            <h2><span>{taskNumber}.</span>{taskName}</h2>
            <p>{firstInformation}</p>
          </div>
          <span>{progress}/5</span>
        </div>
      }
    </div>
  )
}

export default TaskItem