import React, {useState} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {Grid, TextField, MenuItem, Button, Box} from '@material-ui/core';
import Header from '../Header'

const Step1 = (props) => {
    const { pageStatus = 1, headerText = "Place your Bid", setAdress, setPageStatus, adress } = props;

    const [carNum, setCarNum] = useState(5)

    const SCHEMA = Yup.object().shape({

        source_location: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(255)
            .required('Required'),

        destination: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(255)
            .required('Required'),

        car_type: Yup.string().ensure().required("Required"),

        no_of_travellers: Yup.number()
            .integer("Please enter a valid number")
            .moreThan(0 , 'Travellers count should be more than 0')
            .lessThan(carNum , `Travellers count should be less than or equal to ${carNum-1}`)
            .required('Required'),
    });

    // const initialValues = {
    //     source_location:"",
    //     destination:"",
    //     car_type: "",
    //     no_of_travellers: null
    // }

    const handleDropDown = (formHandler, name) => {
        if(name.target.value === "suv" ){
            setCarNum(7)
        }else{
            setCarNum(5)
        }
        formHandler.setFieldValue(name.target.name,name.target.value)
    }

    const handleSubmit = (e) => {
        setAdress({...e})
        setPageStatus(2)
    }

    return (
        <div>
            <Header headerText={headerText} pageStatus={pageStatus} />
            <Box width={"70%"} mx="auto" my="2rem">
                <Formik
                    initialValues={adress}
                    onSubmit={handleSubmit}
                    validationSchema={SCHEMA}
                    //enableReinitialize
                >
                    {(formHandler) => (
                        <Form>
                        <Grid container spacing={1}>
                            <Grid  item xs={6} spacing={3}>
                                <TextField 
                                    fullWidth
                                    label="Source Location *"
                                    variant="outlined"
                                    name="source_location"
                                    error={formHandler.errors?.source_location}
                                    helperText={formHandler.errors?.source_location}
                                    onChange={formHandler.handleChange}
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
                                    onChange={formHandler.handleChange}
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
                                           onChange={(name)=>handleDropDown(formHandler,name)}
                                           >
                                    <MenuItem value="hatchback">Hatchback</MenuItem>
                                    <MenuItem value="sedan">Sedan</MenuItem>
                                    <MenuItem value="suv">SUV</MenuItem>
                                </TextField>

                                </Grid>


                            <Grid  item xs={12} spacing={3}>
                                <TextField 
                                    fullWidth
                                    type="number"
                                    label="Number of Travellers"
                                    variant="outlined"
                                    name="no_of_travellers"
                                    onChange={formHandler.handleChange}
                                    error={formHandler.errors?.no_of_travellers}
                                    helperText={formHandler.errors?.no_of_travellers}
                                     />
                            </Grid>
                        </Grid> 
                        <Box mt={"1rem"}>
                            <Button fullWidth variant="contained" color="primary" type="submit">
                                Enter Bid Details
                            </Button>   
                        </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        </div>
    )
}

export default Step1
