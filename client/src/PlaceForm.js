import React, { useState } from 'react'

const PlaceForm = () => {
    const [place, setPlace] = useState({
        name: "",
        location: "",
        image: "",
        description: "",
        price: ""

    })

    const handleChange = () => {

    }
    const handleSubmit = () => {

    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h3>You can add a new Location</h3>
                <label htmlFor='name'>Name :</label>
                <input type="text" name="name" value={place.name} onChange={handleChange} />
                <label htmlFor='location'>Location :</label>
                <input type="text" name="location" value={place.location} onChange={handleChange} />
                <label htmlFor='image'>Image :</label>
                <input type="text" name="image" value={place.image} onChange={handleChange} />
                <label htmlFor='description'>Description</label>
                <input type="text" name="description" value={place.description} onChange={handleChange} />
                <label htmlFor='price'>Price :</label>
                <input type="text" name="price" value={place.price} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>

    )
}

export default PlaceForm
