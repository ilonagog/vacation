import React from 'react'
import PlaceCard from './PlaceCard'

const Packages = ({ places }) => {

    const placesList = places.map((place) => (<PlaceCard key={place.id} place={place} />))
    return (
        <div>
            {placesList}

        </div>
    )
}

export default Packages
