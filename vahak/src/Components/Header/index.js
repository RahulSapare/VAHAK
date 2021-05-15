import React from 'react'
import Logo from '../../Assets/Images/download.png'
import {Grid, Box} from '@material-ui/core';

const index = (props) => {
    const {headerText, pageStatus} = props;
    return (
        <Grid className="header">
            <Box ml={4} className="logo">
                <img src={Logo} alt="Logo_VAHAK" />    
            </Box>   
            <Box py={4} textAlign="center" className="header-text">
                <h3>
                    {`${headerText}(${pageStatus}/4 step)`}
                </h3>
            </Box>   
        </Grid>
    )
}

export default index
