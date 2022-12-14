
import React, {useState} from "react"
import './NavBar.css'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from "./SidebarData"
import { IconContext } from "react-icons"

export default function NavBar() {

    const [sidebar, setSidebar] = useState(false)

    const showSideBar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className='navbar'>
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSideBar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle" onClick={showSideBar}>
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.tittle}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

