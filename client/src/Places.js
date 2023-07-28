import React, { useState } from 'react'
import PlaceCard from './PlaceCard'
import PlaceForm from './PlaceForm'


const Packages = ({ places }) => {
    const [viewAddForm, setViewAddForm] = useState(false)

    const placesList = places.map((place) => (<PlaceCard key={place.id} place={place} />))

    const handleClick = (e) => {
        setViewAddForm(true)
    }


    return (
        <div>
            <button className='button' onClick={handleClick}>Add New Property</button>
            <br />
            {viewAddForm ?
                <PlaceForm />
                :
                <ul> {placesList}</ul>
            }
        </div>
    )
}

export default Packages
