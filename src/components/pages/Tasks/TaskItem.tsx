import { Link } from 'react-router-dom'
import './TaskItem.css'

interface ITaskItem {
  taskNumber: number,
  taskName: string,
  firstInformation: string,
  secondInformation: string,
  progress: number,
  taskID: string
}

function TaskItem({taskNumber, taskName, firstInformation, secondInformation, progress, taskID}: ITaskItem){

  return(
    <Link to={`/${taskID}`}>
      <div className="task-item">
        <div className="task-item__inner">
          <h2><span>{taskNumber}.</span>{taskName}</h2>
          <p>{firstInformation}</p>
        </div>
        
        <span>{progress}/5</span>
      </div>
    </Link>
  )
}

export default TaskItem