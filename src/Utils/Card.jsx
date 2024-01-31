import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {

  const { show, key } = props

  return (
    <div>
      <div key={key} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={show.show.image ? show.show.image.original : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png'}
            alt={show.show.image ? show.show.image.original : 'No Image'}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {show.show.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{show.show.Language}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{show.show.schedule.time}</p>
        </div>
        <div className='flex flex-wrap flex-row'>
          {show.show.schedule.days.map((day) => (
            <p>{day}</p>
          ))}
        </div>
      </div>
      <Link to='/summary' state={show}>
        <button className='my-2 py-2 px-6 bg-black text-white rounded-lg'>Show More Detail</button>
      </Link>
    </div>
  )
}

export default Card