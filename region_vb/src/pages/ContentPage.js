import Navbar from '../components/Navbar';
import { FiSearch } from 'react-icons/fi';
import { CgChevronDown } from 'react-icons/cg';
import { useState } from 'react';

function Content({Logout}) {

    const [covers, setCover] = useState([
        {img: 'img/omslagsbild1.jpg', name: 'Rubrik 1', id: 1},
        {img: 'img/omslagsbild2.jpg', name: 'Rubrik 2', id: 2},
        {img: 'img/omslagsbild3.jpg', name: 'Rubrik 3', id: 3},
        {img: 'img/omslagsbild4.jpg', name: 'Rubrik 4', id: 4},
        {img: 'img/omslagsbild5.jpg', name: 'Rubrik 5', id: 5}

    ])

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
            <section className='content-wrapper'>
                <div className='material-wrapper'>
                    {covers.map((cover) => (
                        <>
                            <img src= {cover.img} alt="omslagsbild" className="cover" key={cover.id}/>
                        </>
                    ))}
                </div>
            </section>
            <section className='content-wrapper'>
                <div className='material-wrapper'>
                    {covers.map((cover) => (
                        <>
                            <h4 className='material-name' key={cover.id}>{cover.name}</h4>
                        </>
                    ))}
                </div>
            </section>
        </>
     );
}

export default Content;
