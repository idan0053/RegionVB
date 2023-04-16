import '../App.css';
import {IoIosMenu} from 'react-icons/io';
import {IoIosClose} from 'react-icons/io';
import { useState } from 'react';



function HamburgerMenu() {

    const [show, setShow] = useState(false);

    const menuIcon = <IoIosMenu className="menu-icon" size="2rem" onClick={() => setShow(!show)}/>
    const menuIconClosed = <IoIosClose className="menu-icon" size="2rem" onClick={() => setShow(!show)}/>

    return (
        <>
            {show ? menuIconClosed : menuIcon}
            {show &&
                <ul className="nav-list">
                    <li className="nav-links">
                        <a href="/">Start</a>
                    </li>
                    <li className="nav-links">
                    <a href="/Läromedel">Läromedel</a>
                    </li>
                    <li className="nav-links">
                        <p>Support</p>
                    </li>
                </ul>
            }
        </>
     );
}

export default HamburgerMenu;
