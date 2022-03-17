import React from 'react';

// Imports
import { AutoComplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="static" color="primary">
            <Toolbar className={classes.toolbar}>

                <Typography variant="h5" className={classes.title}>
                    Rejsehjælper
                </Typography>

                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Opdag nye steder
                    </Typography>
                    {/*<AutoComplete>*/}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Søg..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    {/*</AutoComplete>*/}
                </Box>

            </Toolbar>
        </AppBar>
    );
}

export default Header;