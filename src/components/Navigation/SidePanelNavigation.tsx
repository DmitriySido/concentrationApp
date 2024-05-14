import { Link } from 'react-router-dom';

const SidePanelNavigation = () => {

  return(
    <div className="side-panel__nav">
      <Link to='/'>Home</Link>
      <Link to='/Settings'>Settings</Link>
      <Link to='/Tasks'>Tasks</Link>
    </div>
  )
}

export default SidePanelNavigation