import { TiDelete } from "react-icons/ti";

const CitiesList = ({ visited, handleDelete, handleDubleClick }) => {
  return (
    <>
      <h1 className="text-center my-3 visit-header">VISITED LIST</h1>
      <div>
        {visited.map((item) => (
          <div
            className={
              item.visited
                ? "visited row text-center list-item"
                : "row text-center list-item"
            }
            key={item.id}
            onDoubleClick={()=>handleDubleClick(item.id)}
          >
            <div className="col">
              <p>{item.place}</p>
            </div>
            <div className="col">
              <p>Date: {new Date(item.day).toLocaleDateString("tr")}</p>
            </div>
            <div className="col">
              <p>{item.numberOfPeople} people</p>
            </div>
            <div className="col text-end">
              <TiDelete
                className="text-danger fs-1"
                type="button"
                onClick={() => handleDelete(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CitiesList;
