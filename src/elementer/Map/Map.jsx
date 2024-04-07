import React from 'react';
import useStyles from './styles';

// Imports til mappet
import GoogleMapReact from 'google-map-react'; // Vi henter google map api til react brug
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

// Vi laver vores variabler, som vi bruger til at sætte vores koordianter og boundaries på vores map
const Map = ({setCoordinates, setBounds, coordinates, places}) => {

    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
            bootstrapURLKeys={{ key: 'AIzaSyCRG0PR6gjMBGqSIo1YrzaRbr6iwYWSdfg' }}
            defaultCenter={coordinates} // Sætter mappet til default at starte på brugeren lokation
            center={coordinates} // Center mappet til brugeren
            defaultZoom={14}
            margin={[50,50,50,50]}

            // Hver gange siden ændre sig, blir onChange kaldt, og vi sætter vores nye koordinater og map boundaries.
            options={''}
            onChange={(e) => {
                console.log(e);
                setCoordinates({ lat: e.center.lat, lng: e.center.lng}); // Sætter nye koordinater
                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw}); // Sætter nye boundaries
            }}
            >
                // .map gør at vi gør noget for en liste af værdier, her kører laver vi en liste over alle kendte lokationer/resturanter inde for mappet
                {places?.map((place, i) => (
                    <div
                    className={classes.markerContainer}
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterButtom>
                                        {place.name}
                                    </Typography>

                                    <img 
                                    className={classes.pointer}
                                    src={place.photo ? place.photo.images.large.url : 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'}
                                    alt={place.name}
                                    />
                                    <Rating size="small" value={Number(place.rating)} readOnly/>
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;
