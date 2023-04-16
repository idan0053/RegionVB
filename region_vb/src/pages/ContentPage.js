import Navbar from '../components/Navbar';
import { useState } from 'react';
import Thumbnails from '../components/Thumbnails';
import Filter from '../components/Filter';

function Content({ Logout }) {
  const [covers] = useState([
    { img: 'img/omslagsbild1.jpg', name: 'Rubrik 1', id: 1 },
    { img: 'img/omslagsbild2.jpg', name: 'Rubrik 2', id: 2 },
    { img: 'img/omslagsbild3.jpg', name: 'Rubrik 3', id: 3 },
    { img: 'img/omslagsbild4.jpg', name: 'Rubrik 4', id: 4 },
    { img: 'img/omslagsbild5.jpg', name: 'Rubrik 5', id: 5 },
  ]);

  const [search, setSearch] = useState('');

  return (
    <>
        <Navbar />
        <button className="log-out-btn" onClick={Logout}>
          LOGGA UT
        </button>
        <header className="content-header">
          <div className="heading-wrapper">
            <h1>Läromaterial</h1>
            <p className="content-info-text">
              Informativ text som beskriver sidan etc..
            </p>
          </div>
          <Filter setSearch={setSearch} />
        </header>
        <Thumbnails covers={covers} search={search}/>
    </>
  );
}

export default Content;
