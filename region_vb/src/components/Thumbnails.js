import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Thumbnails({ covers, search }) {
  const [clickedMaterial, setClickedMaterial] = useState(null);
  const navigate = useNavigate();

  const handleClick = (index) => {
    const clicked = covers[index];
    navigate("/Material", { state: { material: clickedMaterial } });
    setClickedMaterial(clicked);
  };

  return (
    <>
      <section className="thumbnail-wrapper">
        <div className="material-wrapper">
          {covers
            .filter((cover) => {
              return search.toLowerCase() === ""
                ? cover
                : cover.name.toLowerCase().includes(search);
            })
            .map((cover, index) => (
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
          {covers
            .filter((cover) => {
              return search.toLowerCase() === ""
                ? cover
                : cover.name.toLowerCase().includes(search);
            })
            .map((cover, index) => (
              <h5
                className="material-name"
                key={cover.id}
                onClick={() => handleClick(index)}
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
