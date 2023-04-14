import Navbar from '../components/Navbar';
import { FiSearch } from 'react-icons/fi';
import { CgChevronDown } from 'react-icons/cg';

function content({Logout}) {
    return (
        <>
            <Navbar/>
            <button className='log-out-btn' onClick={Logout}>LOGGA UT</button>
            <header className='content-header'>
                <div className='heading-wrapper'>
                    <h1>Läromaterial</h1>
                    <p className='content-info-text'>Informativ text som beskriver sidan etc..</p>
                </div>
                <div className='find-content-wrapper'>
                    <form className='search-form'>
                        <input className='search-input' type="text" placeholder="Sök..."/>
                        <button className='search-button'><FiSearch className='search-icon'/></button>
                    </form>
                    <div className='filter-wrapper'>
                        <div className='filter-bar'>
                            <p>Filtrera</p>
                        </div>
                        <button className='filter-button'><CgChevronDown className='filter-icon'/></button>
                    </div>
                </div>
            </header>
            <div className='material-wrapper'>

            </div>
        </>
     );
}

export default content;
