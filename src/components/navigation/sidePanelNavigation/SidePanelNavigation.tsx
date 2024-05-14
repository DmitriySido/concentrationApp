import { Link } from "react-router-dom"
import './SidePanelNavigation.css' 

interface IsidePanelLink {
  linkPath: string,
  linkName: string
}

function SidePanelNavigation(){

  const sidePanelLinks: IsidePanelLink[] = [
    {
      linkPath: '/',
      linkName: 'Home'
    },
    {
      linkPath: '/tasks',
      linkName: 'Tasks'
    },
    {
      linkPath: '/settings',
      linkName: 'Settings'
    },
  ]


  return(
    <nav className="side-panel__navigation">
      {
        sidePanelLinks.map((item)=>{
          return <div className="side-panel__item" key={item.linkName + ' Item'}>
            <Link to={item.linkPath} className="side-panel__link">{item.linkName}</Link>
          </div>
        })
      }
    </nav>
  )
}

export default SidePanelNavigation