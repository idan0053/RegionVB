import HamburgerMenu from './HamburgerMenu';
import { CgProfile } from 'react-icons/cg';

function Navbar() {

    return (
        <div className='position-relative'>
            <img className='nav-background' src="navbar.png" alt="blue background" />
            <nav className='navbar'>
                <HamburgerMenu/>
                <CgProfile className="profil-icon" size="1.6rem" strokeWidth="0" />
            </nav>
        </div>
    );
}

export default Navbar;
