import "./cities.css";
import { cityData } from "../helper/data";
const Cities = () => {
  return (
    <div className="container mt-5 align-items-center">
      <div className="row g-3 justify-content-center">
        <h1 className="text-center mb-2 header">PLACES TO GO</h1>
        {cityData.map((item) => (
          <div className="col-3">
          <div className="card">
            <img className="card-img" src={item.img} alt="" />
          </div>
            <div className="card-content">
              <p className="card-title">{item.name}</p>
              <p className="card-para">
                {item.dep}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cities;
