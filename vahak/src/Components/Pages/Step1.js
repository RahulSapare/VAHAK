import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {Grid, TextField, MenuItem, Button} from '@material-ui/core';
import Header from '../Header'

const Step1 = (props) => {
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

    const { pageStatus = 1, headerText = "Place your Bid" } = props;
    return (
        <div>
            <Header headerText={headerText} pageStatus={pageStatus} />
            <div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={SCHEMA}
                    enableReinitialize
                >
                    {(formHandler) => (
                        <Form>
                        {console.log(formHandler)}
                        <Grid container spacing={1}>
                            <Grid  item xs={6} spacing={3}>
                                <TextField 
                                    fullWidth
                                    label="Source Location *"
                                    variant="outlined"
                                    name="source_location"
                                    error={formHandler.errors?.source_location}
                                    helperText={formHandler.errors?.source_location}
                                     />
                            </Grid>
                            <Grid  item xs={6} spacing={3}>
                                <TextField 
                                    fullWidth
                                    label="Destination *"
                                    variant="outlined"
                                    name="destination"
                                    error={formHandler.errors?.destination}
                                    helperText={formHandler.errors?.destination}
                                    
                                     />
                            </Grid>

                                <Grid item xs={12}>
                                <TextField variant="outlined"
                                           label="Enter Car Type" 
                                           name="car_type" 
                                           fullWidth 
                                           select
                                           error={formHandler.errors?.car_type}
                                           helperText={formHandler.errors?.car_type}
                                           >
                                    <MenuItem value="hatchback">Hatchback</MenuItem>
                                    <MenuItem value="sedan">Sedan</MenuItem>
                                    <MenuItem value="suv">SUV</MenuItem>
                                </TextField>

                                </Grid>


                            <Grid  item xs={12} spacing={3}>
                                <TextField 
                                    fullWidth
                                    label="Number of Travellers"
                                    variant="outlined"
                                    name="no_of_travellers"
                                    type="number"
                                    error={formHandler.errors?.no_of_travellers}
                                    helperText={formHandler.errors?.no_of_travellers}
                                     />
                            </Grid>
                        </Grid> 

                        <Button variant="contained" color="primary" type="submit">
                        Enter Bid Details
                        </Button>   
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Step1
