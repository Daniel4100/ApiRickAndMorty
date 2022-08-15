import React from "react";
import useApiCall from "../hooks/useApiCall";

const Residents = ({ url }) => {
  const resident = useApiCall(url);
  console.log(resident)
  return (
    <article className="resident-card">
      <div className="img">
        <img src={resident?.image} alt={resident?.name} />
      <div className="status">
        <div className={`circle ${resident?.status}`}>
            
        </div>
        <p>{resident?.status}</p>
      </div>
      </div>
      <div className="resident-card__rigth">
        <h5>{resident?.name}</h5>
        <div className="information">
          <span>specie: </span>
          <p>{resident?.species}</p>
        </div>
        <div className="information">
          <span>episodes where appear:</span>
          <p>{resident?.episode.length}</p>
        </div>
      </div>
    </article>
  );
};

export default Residents;
