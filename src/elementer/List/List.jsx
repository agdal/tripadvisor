import useStyles from './styles';
import React, { useEffect, useState } from "react";

// Imports til listen
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import Placering from '../Placering/Placering';

const List = ({places}) => {

    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}>
            <Typography variant="h4"></Typography>
            
            <FormControl className={classes.formControl} style={{margin: '10px', minWidth: 120, marginBottom: '30px'}}>
                <InputLabel id="type">Type</InputLabel>
                    <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restauranter</MenuItem>
                    <MenuItem value="hotels">Hoteller</MenuItem>
                    <MenuItem value="attractions">Attraktioner</MenuItem>
                    </Select>
          </FormControl>

          <FormControl className={classes.formControl} style={{margin: '10px', minWidth: 120, marginBottom: '30px'}}>
            <InputLabel id="rating">Vurdering</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="0">Alle</MenuItem>
              <MenuItem value="3">Over 3.0</MenuItem>
              <MenuItem value="4">Over 4.0</MenuItem>
              <MenuItem value="4.5">Over 4.5</MenuItem>
            </Select>
          </FormControl>

        <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
                <Grid item key={i} xs={12}>
                    <Placering place={place}/>
                </Grid>
            ))}
        </Grid>

        </div>
    );
}

export default List;