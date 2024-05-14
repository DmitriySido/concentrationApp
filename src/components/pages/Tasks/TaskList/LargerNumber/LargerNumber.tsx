import './LargerNumber.css'

function LargerNumber(){
  
  return(
    <div className="task pages__wrapper">
      <div className='larger-number__inner'>
        <div className='timer'>00:00</div>

        <div className='playing-field'>
          <div className='left-field'></div>
          <div className='center-point'></div>
          <div className='right-field'></div>
        </div>
      </div>
    </div>
  )
}

export default LargerNumber