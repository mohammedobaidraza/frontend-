import React from 'react' ;
import { IoMdPaperPlane } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEventNote } from "react-icons/md";



import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>

            

                < IoMdPaperPlane className='icon_header'/> EdVenture Park
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <FiHome className='icon'/> <b>Home</b>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <BsFillGrid3X3GapFill className='icon'/> <b>Dashboard</b>
                </a>
            </li>
            
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> <b>Campus Leads</b>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <CgProfile className='icon'/> <b>Profile</b>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdOutlineEventNote className='icon'/> <b>Events</b>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> <b>Settings</b>
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar