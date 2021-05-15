import React, {useState} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {Grid, Button, Typography, InputBase, TextField, FormControlLabel, Checkbox, Box } from '@material-ui/core';
import {EditOutlined as EditIcon} from '@material-ui/icons/';
import Header from '../Header'

const Step2 = (props) => {
    const {pageStatus=2, headerText="Place your Bid", sourceLocation, destination, carType, travellers} = props
    const SCHEMA = Yup.object().shape({

        source_location: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(255)
            .required('Required'),

        destination: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(255)
            .required('Required'),

        
        car_type: Yup.array().ensure(),

        no_of_travellers: Yup.number()
        .required('Required'),
    });

    const initialValues = {
        source_location:"",
        destination:"",
        car_type: [],
        no_of_travellers: 0
    }

    const handleSubmit = () => {

    }

    const [isPressedNext, setIsPressedNext] = useState(true)

    return (
        <div>
            <Header headerText={headerText} pageStatus={pageStatus} />
            <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={SCHEMA}
                enableReinitialize>
                    {(formHandler) => (
                        <Form>
                        {console.log(formHandler)}
                        <Grid container spacing={1}>
                            <Grid container item justify="space-between">
                                <Grid item>
                                    <Typography variant="p">
                                        JOURNEY DETAILS
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="span">
                                        <EditIcon />Edit
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    {sourceLocation} - {destination}
                                </Typography>
                                <Typography variant="h6">
                                    {travellers} Persons, {carType}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h3" className="rupee-input">
                                    ₹
                                    <InputBase placeholder="0" type="number"/>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<Checkbox name="checkedC" />} label="Rate Negiotable" />
                            </Grid>
                        </Grid> 
                        {
                            !isPressedNext?
                            <Button variant="contained" color="primary" type="submit" disabled>
                                Next
                            </Button>
                            :
                            <>
                                <Grid item xs={12}>
                                    <Box>
                                        <TextField 
                                            fullWidth
                                            label="Enter your 10 digits Mobile number"
                                            variant="outlined"
                                            name="mobile_number"
                                            error={formHandler.errors?.source_location}
                                            helperText={formHandler.errors?.source_location}                                        
                                        />
                                    </Box>
                                    <Box>
                                        <FormControlLabel control={<Checkbox name="checkedC" />} label="Get updates on" /> Whatsapp
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                        fullWidth
                                        label="Enter your 10 digits Mobile number"
                                        variant="outlined"
                                        name="user_name"
                                        error={formHandler.errors?.source_location}
                                        helperText={formHandler.errors?.source_location}                                        
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                        fullWidth
                                        label="Enter Remarks (optional)"
                                        variant="outlined"
                                        name="remarks"
                                        error={formHandler.errors?.source_location}
                                        helperText={formHandler.errors?.source_location}                                        
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" type="submit">
                                        Verify via OTP
                                    </Button>
                                </Grid>
                            </>
                        }
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Step2
