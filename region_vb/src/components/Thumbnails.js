//import { useNavigate } from "react-router-dom";

function Thumbnails({covers, search}) {

    //const navigate = useNavigate();

    //const pathToMaterial = () => {
        //navigate('/material');
    //};

    return (
        <>
            <section className='thumbnail-wrapper'>
                <div className='material-wrapper'>
                    {covers.filter((cover) => {
                        return search.toLowerCase() === '' ? cover : cover.name.toLowerCase().includes(search)
                    }).map((cover) => (
                            //<a href="/material">
                            <img
                            src= {cover.img}
                            alt="omslagsbild"
                            className="cover"
                            key={cover.id}
                            //onClick={() => navigate("/material")}
                            />
                            //</a>
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

export default Thumbnails;
