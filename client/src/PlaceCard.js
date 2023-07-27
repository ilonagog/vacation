import React from 'react'

const PlaceCard = ({ place }) => {
    return (
        <div>
            <p>{place.name}</p>
            <p>{place.location}</p>
            <img src={place.image} alt={place.image} />
            <p>{place.description}</p>
            <p>{place.price}</p>




        </div>
    )
}

export default PlaceCard
