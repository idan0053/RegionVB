//import { useNavigate } from "react-router-dom";
function Thumbnails({ covers, search }) {

  //const navigate = useNavigate();

  const handleThumbnailClick = (index) => {
    const clicked = covers[index];
    //navigate('/Material');
    console.log(clicked)
  };

  return (
    <>
      <section className="thumbnail-wrapper">
        <div className="material-wrapper">
          {covers.filter((cover) => {
              return search.toLowerCase() === ""
                ? cover
                : cover.name.toLowerCase().includes(search);
            })
            .map((cover) => (
              <img
                src={cover.img}
                alt="omslagsbild"
                className="cover"
                key={cover.id}
              />
            ))}
        </div>
      </section>
      <section className="thumbnail-wrapper">
        <div className="material-wrapper">
          {covers.filter((cover) => {
              return search.toLowerCase() === ""
                ? cover
                : cover.name.toLowerCase().includes(search);
            })
            .map((cover, index) => (
              <h5
                className="material-name"
                key={cover.id}
                onClick={() => handleThumbnailClick(index)}
              >
                {cover.name}
              </h5>
            ))}
        </div>
      </section>
    </>
  );
}

export default Thumbnails;
