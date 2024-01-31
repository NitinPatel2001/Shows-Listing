import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Utils/Card';

const ShowsList = () => {

  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const arr = await axios.get('https://api.tvmaze.com/search/shows?q=all')
      setData(arr.data);
      setLoading(false)
    }
    fetchData();
  }, [])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">ALL Shows</h2>
        {Loading ? (<h1>Loading.....</h1>) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {Data.map((sh) => (
              <Card key={sh.show.id} show={sh} />
            ))}
          </div>

        )}
      </div>
    </div>
  )
}

export default ShowsList