import TaskItem from "./TaskItem"

function Tasks(){

  const tasks = [
    {
      taskName: 'Большее число',
      firstInformation: 'Сравни числа и выбери большее.',
      secondInformation: 'Смотри на центральную точку, при этом выбирай большее число. И постарайся делать это как можно быстрее.',
      progress: 0,
      taskID: 'LargerNumber'
    },
    {
      taskName: 'Лишняя фигура',
      firstInformation: 'Найди лишнюю фигуру среди других фигур',
      secondInformation: 'Ищи лишнюю фигуру и делай это как можно быстрее',
      progress: 0,
      taskID: 'ExtraPiece'
    },
  ]

  return(
    <div className="tasks pages__wrapper">
      {
        tasks.map((task, index) => {
          return <TaskItem key={index} taskNumber={index + 1} taskName={task.taskName} firstInformation={task.firstInformation} secondInformation={task.secondInformation} progress={task.progress} taskID={task.taskID}/>
        })  
      }
    </div>
  )
}

export default Tasks