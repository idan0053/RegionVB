import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import MaterialPage from '../pages/MaterialPage';

function Thumbnails({covers, search}) {

    const navigate = useNavigate();

    const pathToMaterial = () => {
      navigate.push('/Läromedel');
    };

    return (
        <>
            <section className='thumbnail-wrapper'>
                <div className='material-wrapper'>
                    {covers.filter((cover) => {
                        return search.toLowerCase() === '' ? cover : cover.name.toLowerCase().includes(search)
                    }).map((cover) => (
                            <img
                            src= {cover.img}
                            alt="omslagsbild"
                            className="cover"
                            key={cover.id}
                            onClick={pathToMaterial}
                            />
                    ))}
                </div>
            </section>
            <section className='thumbnail-wrapper'>
                <div className='material-wrapper'>
                    {covers.filter((cover) => {
                        return search.toLowerCase() === '' ? cover : cover.name.toLowerCase().includes(search)
                    }).map((cover) => (
                            <h4 className='material-name' key={cover.id}>{cover.name}</h4>
                    ))}
                </div>
            </section>
        </>
     );
}

function App() {
    return (
        <Router>
            <Routes>
            <Route exact path="/" element={<Thumbnails/>} />
            <Route path="/Läromedel" element={<MaterialPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
