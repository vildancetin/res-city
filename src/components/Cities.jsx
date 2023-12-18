
import { cityData } from "../helper/data";
import { useState } from "react";
import AddModal from "./AddModal";
const Cities = ({handleAdd}) => {

  const [show, setShow] = useState(false);
  const [city,setCity]=useState("")

  const handleShow = (name) => {
    setShow(true);
    setCity(name)
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="container mt-5 align-items-center">
      <div className="row g-3 justify-content-center">
        <h1 className="text-center mb-2 header">PLACES TO GO</h1>
        {cityData.map((item) => (
          <div className="col-3" key={item.id}>
            <div className="card">
              <img
                className="card-img"
                src={item.img}
                alt=""
                onClick={()=>handleShow(item.name)}
              />
            </div>
            <div className="card-content">
              <p className="card-title">{item.name}</p>
              <p className="card-para">{item.dep}</p>
            </div>
          </div>
        ))}
      </div>
      <AddModal show={show} handleClose={handleClose} city={city} handleAdd={handleAdd} />
    </div>
  );
};

export default Cities;
