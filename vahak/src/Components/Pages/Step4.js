import React from 'react'
import Header from '../Header'
import {Divider, Grid, Typography, Box, Button } from '@material-ui/core';

const Step4 = (props) => {
    const {pageStatus=4, headerText="Summary and Submit Bid", adress, prizeAndDetails} = props
    return (
        <div>
            <Header headerText={headerText} pageStatus={pageStatus} />
            <Box width={"70%"} mx="auto" my="2rem">
                <Grid container spacing={1}>
                    <Grid container item justify="space-between">
                        <Grid item>
                            <Typography variant="p">
                                JOURNEY DETAILS
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            {adress?.source_location} - {adress?.destination}
                        </Typography>
                        <Typography variant="h6">
                            {adress?.no_of_travellers} Persons, {adress?.car_type}
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        
                    <Divider />
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="p">
                                BID DETAILS
                                    </Typography>
                        </Grid>
                        <Grid container item justify="space-between">
                            <Grid item xs={6}>
                                <Typography variant="h6">
                                    {prizeAndDetails?.mobile_number}
                                </Typography>
                                <Typography variant="h6">
                                    {prizeAndDetails?.user_name}
                                </Typography>
                                <Typography variant="h6">
                                    {prizeAndDetails?.remarks}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4">
                                    ₹
                                    {prizeAndDetails?.amount}
                                </Typography>
                                <label>Fixed Price</label>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{marginTop:"2rem"}}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit">
                                Submit Bid
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Step4
