import React from 'react';
import useStyles from './styles';

// imports
import {Card, Box, Typography, Button, CardMedia, CardActions, CardContent, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

const Placering = ({place}) => {

    const classes = useStyles();

    return (
        <Card elevation={6}>
            <CardMedia 
            style={{height: 250}}
            image={place.photo ? place.photo.images.large.url : 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'}
            title={place.name}
            />
            <CardContent>
                <Typography gutterButtom variant="h5">{place.name}</Typography>

                <Box display="flex" justifyContent="space-between">
                <Rating size="small" value={Number(place.rating)} readOnly/>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Pris</Typography>
                    <Typography gutterButtom variant="subtitle1">{place.price_level}</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Rang</Typography>
                    <Typography gutterButtom variant="subtitle1">{place.ranking}</Typography>
                </Box>

                {place?.awards?.map((award) => (
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}

                {place?.cuisine?.map(({name}) => (
                    <Chip 
                    key={name}
                    size="small"
                    label={name}
                    className={classes.chip}
                    
                    />
                ))}

                {place?.address && (
                    <Typography gutterButtom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon /> {place.address} ({place.distance_string})
                    </Typography>
                )}

                {place?.phone && (
                    <Typography gutterButtom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}

                <CardActions>
                    <Button variant="outlined" size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                        TripAdvisor
                    </Button>

                    <Button variant="outlined" size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Hjemmeside
                    </Button>

                    <Button variant="outlined" size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Rutevejledning
                    </Button>
                </CardActions>

            </CardContent>
        </Card>
    );
}

export default Placering;