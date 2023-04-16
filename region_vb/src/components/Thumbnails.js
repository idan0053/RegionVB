import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import MaterialPage from '../pages/MaterialPage';

function Thumbnails({covers, search}) {

    const history = useHistory();

    const pathToMaterial = () => {
      history.push('/Läromedel');
    };

    return (
        <>
        <Router>
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


        <Route path="/Läromedel" component={MaterialPage} />
      </Router>
        </>
     );
}

export default Thumbnails;
