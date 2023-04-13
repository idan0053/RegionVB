import HamburgerMenu from './HamburgerMenu';
import { CgProfile } from 'react-icons/cg';

function Navbar() {
    return (
        <nav className='navbar'>
            <HamburgerMenu/>
            <CgProfile className="profil-icon" size="1.6rem" stroke-width="0" />
        </nav>
    );
}

export default Navbar;
