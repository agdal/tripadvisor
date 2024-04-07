import React, { useState, useEffect } from 'react';

// Css
import { CssBaseline, Grid } from '@material-ui/core';

// Import vores elementer i appen
import Header from './elementer/Header/Header';
import List from './elementer/List/List';
import Map from './elementer/Map/Map';
import { getPlaceData } from './api/index';

const App = () => {

    // Lav variabler til at gemme diverse data
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState('');

    // Set koordinater til brugerens placering
    useEffect(() => {
        // VI bruger Google chromes data omkring hvor brugeren befinder sig, og sætte disse data, til vores variabler vi difinerede i starten.
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        })
    }, []);

    // Henter data indenfor kortets koordinater
    useEffect(() => {
        console.log(coordinates, bounds);
        getPlaceData(bounds.sw, bounds.ne) // Vi kalder vores async funktion vi lavede i api filen, og siger vi vil hente data indenfor koordinaterne mest sydvest og nordøst på kortet, hvilket danner en firkant som er vores kort.
            .then((data) => {
                console.log(data); // test
                setPlaces(data); // Vi sætter vores data på skærmen.
            })
    }, [coordinates, bounds]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '100%'}}>

                <Grid item xs={12} md={4}>
                    <List 
                    places={places}
                    />
                </Grid>

                <Grid item xs={12} md={8}>
                    <Map 
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                    places={places}
                    />
                </Grid>

            </Grid>
        </>
    );
}

export default App;
