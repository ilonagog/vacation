import React, { useState } from 'react'
import PlaceCard from './PlaceCard'
import PlaceForm from './PlaceForm'
import Button from 'react-bootstrap/Button';


const Packages = ({ places, setPlaces }) => {
    const [viewAddForm, setViewAddForm] = useState(false)

    const placesList = places.map((place) => (<PlaceCard key={place.id} place={place} />))

    const handleClick = (e) => {
        setViewAddForm(true)
    }

    const addPlace = (place) => {
        fetch("/places", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: place.name,
                location: place.location,
                image: place.image,
                description: place.description,
                price: place.price
            })
        })
            .then((resp) => resp.json())
            .then(data => {
                setPlaces([...places, data]);
            })
        setViewAddForm(false)
    }


    return (
        <div>
            <Button variant="outline-success" onClick={handleClick}>Add New Property</Button>{' '}
            <br />
            <br />
            {viewAddForm ?
                <PlaceForm addPlace={addPlace} />
                :
                <ul> {placesList}</ul>
            }
        </div>
    )
}

export default Packages
