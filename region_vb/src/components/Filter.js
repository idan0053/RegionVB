import { FiSearch } from 'react-icons/fi';
import { CgChevronDown } from 'react-icons/cg';

function Filter({setSearch}) {

    return (
        <>
            <div className='find-content-wrapper'>
                    <form className='search-form'>
                        <input className='search-input' type="text" placeholder="Sök..." onChange={(e) => setSearch(e.target.value)}/>
                        <button className='search-button'><FiSearch className='search-icon'/></button>
                    </form>
                    <div className='filter-wrapper'>
                        <div className='filter-bar'>
                            <p>Filtrera</p>
                        </div>
                        <button className='filter-button'><CgChevronDown className='filter-icon'/></button>
                    </div>
                </div>
        </>
     );
}

export default Filter;
