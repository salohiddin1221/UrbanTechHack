import React from 'react'
import '../style/sidebar.css'
import { useSelector, useDispatch } from 'react-redux'
import { FaTimes, FaAmbulance } from 'react-icons/fa'
import {IoIosHelpCircle} from 'react-icons/io'
import { close } from '../rtk/slice/sidebarSlice'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const active = useSelector((state) => state.sidebar.active)
    const dispatch = useDispatch()
    

  return (
    <div className={active ? 'sidebar active' : 'sidebar'}>
       <div onClick={() => dispatch(close())}  className="sidebar-close">
          <FaTimes/>
       </div>
       <div className="sidebar-logo">
        Bir<span>on</span>
       </div>
       <div className="sidebar-links">
          <Link className='sidebar-link' onClick={() => dispatch(close())} to='/'>
           <FaAmbulance/> Mashinani kuzatish
          </Link>
          <Link className='sidebar-link' onClick={() => dispatch(close())} to='/birinchi-yordam'>
           <IoIosHelpCircle/> Birinchi yordam
          </Link>
       </div>

    </div>
  )
}

export default Sidebar