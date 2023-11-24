import React, { useEffect, useState } from 'react'
import Navbar from './componets/Navbar';
import Filter from './componets/Filter';
import Property from './componets/Property';

function App() {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cities, setCities] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/api/list-properties", { method: "GET" })
      .then(res => res.json()).then(data => {
        console.log(data);
        setData(data);
        const cities = [];
        data.map(property => {
          if (!cities.includes(property.city) && property.city) {
            cities.push(property.city);
          }
        })
        setCities(cities);
        setFilteredData(data);
      });

  }, [])



  return (
    <>
      <Navbar />

      <h1 className='md:mx-16 mx-5 my-10 font-semibold text-2xl'>Search Properties for Rent</h1>

      <Filter data={data} setFilteredData={setFilteredData} cities={cities} />

      <div className='grid grid-cols-3 gap-4 md:mx-16 md:my-10 m-5'>
        {filteredData.map(thisProperty => <Property key={thisProperty._id} property={thisProperty} />)}
      </div>

      <footer className='h-32 bg-slate-100'>
      </footer>
    </>
  )
}

export default App
