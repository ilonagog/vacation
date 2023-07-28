import React, { useState } from 'react'

const PlaceForm = ({ addPlace }) => {
    const [input, setInput] = useState({
        name: "",
        location: "",
        image: "",
        description: "",
        price: ""

    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })


    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addPlace(input)
    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h3>You can add a new Location</h3>
                <label htmlFor='name'>Name :</label>
                <input type="text" name="name" value={input.name} onChange={handleChange} />
                <label htmlFor='location'>Location :</label>
                <input type="text" name="location" value={input.location} onChange={handleChange} />
                <label htmlFor='image'>Image :</label>
                <input type="text" name="image" value={input.image} onChange={handleChange} />
                <label htmlFor='description'>Description</label>
                <input type="text" name="description" value={input.description} onChange={handleChange} />
                <label htmlFor='price'>Price :</label>
                <input type="text" name="price" value={input.price} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>

    )
}

export default PlaceForm
