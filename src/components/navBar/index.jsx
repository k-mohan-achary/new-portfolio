import React, { useState } from 'react';
import {FaBars, FaReact} from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './style.scss';
import Logo from '../../img/logo.png';


const data = [
    // {
    //     label :"Home",
    //     to:'/',
    // },
    // {
    //     label :"About Me",
    //     to:'/about',
    // },
    // {
    //     label :"Contact",
    //     to:'/contact',
    // },
    // {
    //     label :"Resume",
    //     to:'/resume',
    // }
]




const Navbar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon =() =>{
        setToggleIcon(!toggleIcon);
    }





  return (
    <div>
        {/* Navbar */}
        <nav className="navbar">
            <div className='navbar__container'>

                <Link to={'/'} className='navbar__container__logo'>
                  <img src={Logo} alt="Logo" />  
                </Link>

            </div>
            <ul className={`navbar__container__menu  ${toggleIcon ? "active" :""} ` }>
                {
                    data.map((item, key) => (
                       <li key={key} className='navbar__container__menu__item'>
                        <Link className='navbar__container__menu__item__links' to={item.to}>
                          {item.label}
                        </Link>
                       </li>

                    ))
                }
            </ul>
            <div className='nav-icon' onClick={handleToggleIcon}>
                {
                    // toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                }
            </div>


        </nav>
    </div>
  )
}

export default Navbar;
