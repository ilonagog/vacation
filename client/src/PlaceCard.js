// import React from 'react'

// const PlaceCard = ({ place }) => {
//     return (
//         <div>
//             <p>{place.name}</p>
//             <p>{place.location}</p>
//             <img src={place.image} alt={place.image} />
//             <p>{place.description}</p>
//             <p>{place.price}</p>
//         </div>
//     )
// }

// export default PlaceCard

// const PlaceCard = ({ place }) => {
//     return (
//         <div className="row-cols-md-2">
//             <div className="col">
//                 <div className="card">
//                     <img src={place.image} class="card-img-top" alt={place.image} />
//                     <div class="card-body">
//                         <h5 class="card-title">{place.name}</h5>
//                         <p class="card-text"> {place.description}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PlaceCard;

import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

const PlaceCard = ({ place }) => {
    return (
        <Card sx={{ minHeight: '280px', width: 320 }} className="card">
            <CardCover>
                <img
                    src={place.image}
                    alt={place.image}
                />
            </CardCover>
            <CardCover
                sx={{
                    background:
                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(226 234 220 / 0%), rgba(0,0,0,0) 300px)',
                }}
            />
            <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                    {place.name}
                </Typography>
                <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="#ffffff"
                >
                    {place.location}
                </Typography>
            </CardContent>
        </Card>
    );
}
export default PlaceCard;