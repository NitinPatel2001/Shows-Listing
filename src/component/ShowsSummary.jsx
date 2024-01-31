import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const ShowsSummary = (props) => {

  const location = useLocation()
  let data = location.state

  const [open, setopen] = useState(false);

  const HandleClick = () => {
    setopen(true)
  }

  return (
    <div className='w-full'>
      <Link to='/'>
        <button onClick={HandleClick} className='py-5 px-10 mx-10 m-10 lg:mx-20 rounded-lg bg-black text-white'>Back</button>
      </Link>
      <div className='flex flex-col font-serif p-5 lg:p-20'>
        {data === undefined ? (<h1>No Data</h1>) : (
          <div>
            <div className='font-lg font-bold px-10 py-10'>score: <span className='text-sky-600'>{data.score}</span></div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='flex flex-col gap-5 p-10'>
                <div className='font-lg text-3xl font-extrabold'>{data.show.name}</div>
                {data.show.rating ? (<div className='font-lg font-bold '>Rating: <span className='text-sky-600'>{data.show.rating.average}</span></div>) : ('')}
                <div className='font-lg font-bold'>Language: {data.show.language}</div>
                <div className='font-lg font-bold flex flex-row gap-2'>
                  Genres:
                  {data.show.genres.map((gen) => (
                    <p className='text-sky-600'>{gen}</p>
                  ))}
                </div>
                <div className='font-lg font-bold'>Timing: {data.show.schedule.time}</div>
                <div className='font-lg font-bold flex flex-wrap flex-row gap-2'>
                  Day:
                  {data.show.schedule.days.map((day) => (
                    <p className='text-sky-600'>{day}</p>
                  ))}
                </div>
                <Link to={data.show.officialSite} className='font-lg font-bold text-sky-900'>{data.show.officialSite}</Link>
              </div>
              <div className='h-96 flex flex-row justify-center'>
                <img className='h-full aspect-square'
                  src={data.show.image ? data.show.image.original : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png'}
                  alt={data.show.image ? data.show.image.original : 'No Image'}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {open ? (

        <div className='px-5 py-10 lg:px-20'>
          <div className="border p-12 border-gray-900/10">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Book Tickets for {data.show.name}</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Please Fill the Details</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Number of ticket
                </label>
                <div className="mt-2">
                  <select
                    id="numberofticket"
                    name="numberofticket"
                    autoComplete="numberofticket-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className='px-10 py-5 my-10 rounded-lg bg-black text-white'>Procced for Payment</button>
        </div>

      ) : (<button onClick={HandleClick} className='py-5 px-10 mx-10 m-10 lg:mx-20 rounded-lg bg-black text-white'>Book A Ticket</button>)}
    </div>
  )
}

export default ShowsSummary