import React, { useState } from "react";
import Cities from "../components/Cities";
import CitiesList from "../components/CitiesList";
import { visitedCities } from "../helper/data";


const Home = () => {
  const [visited,setVisited]=useState(JSON.parse(localStorage.getItem("list")) || [])

  const handleAdd=(newVisiting)=>{
    setVisited([...visited,newVisiting])
    localStorage.setItem("list",JSON.stringify([...visited,newVisiting]))
  }
  const handleDelete=(id)=>{
      const filteredList=visited.filter((item)=> item.id!==id)
      setVisited(filteredList)
    localStorage.setItem("list",JSON.stringify(filteredList))

  }

  const handleDubleClick=(id)=>{
    const updateList=visited.map((item)=>item.id === id ? {...item,visited:!item.visited}: item)
    setVisited(updateList)
    localStorage.setItem("list",JSON.stringify(updateList))

  }
  return (
  <div>
    <Cities handleAdd={handleAdd}/>
    <CitiesList visited={visited} handleDelete={handleDelete} handleDubleClick={handleDubleClick}/>
  </div>
  );
};

export default Home;
