import React, {useState} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {Grid, Button, Typography, InputBase, TextField, FormControlLabel, Checkbox, Box } from '@material-ui/core';
import {EditOutlined as EditIcon} from '@material-ui/icons/';
import Header from '../Header'

const Step2 = (props) => {
    const {pageStatus=2, headerText="Place your Bid", adress, setPrizeAndDetails, setPageStatus} = props

    const SCHEMA_1 = Yup.object().shape({

        amount: Yup.number()
        .min(100, 'Must be at least 3 characters')
        .lessThan(9999999999, "Amount is too large")
        .required('Required'),

        rate_negiotable: Yup.boolean()
    });

    const initialValues_1 = {
        amount: 0,
        rate_negiotable: false
    }

    const handleSubmit_1 = (value) => {
        setIsPressedNext(true)
        setPrizeAndDetails({...value})
    }
    const SCHEMA_2 = Yup.object().shape({
        mobile_number: Yup.string()
            .matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/, 'Phone number is not valid please enter with +91')
            .required("Required"),
        user_name:Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(255)
            .required('Required'),
        remarks: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(255)
    });

    const initialValues_2 = {
        mobile_number:"",
        user_name:"",
        remarks: ""
    }

    const handleSubmit_2 = (value) => {
        setPrizeAndDetails(prevState => ({...prevState,...value}))
        setPageStatus(3)
    }

    const [isPressedNext, setIsPressedNext] = useState(false)

    return (
        <div>
            <Header headerText={headerText} pageStatus={pageStatus} />
            <div>
            <Formik
                initialValues={initialValues_1}
                onSubmit={handleSubmit_1}
                validationSchema={SCHEMA_1}
                enableReinitialize>
                    {(formHandler) => (
                        <Form>
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
                                    {adress?.source_location} - {adress?.destination}
                                </Typography>
                                <Typography variant="h6">
                                    {adress?.no_of_travellers} Persons, {adress?.car_type}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h3" className="rupee-input">
                                    ₹
                                    {
                                        isPressedNext?
                                        formHandler.values.amount.toLocaleString()
                                        :
                                        <TextField
                                            className="price-input"
                                            placeholder="0"
                                            name="amount"
                                            type="number" 
                                            disabled={isPressedNext}
                                            onChange={formHandler.handleChange}
                                            error={formHandler.errors?.amount}
                                            helperText={formHandler.errors?.amount}
                                            />
                                    }
                                </Typography>
                            </Grid>
                            <Grid item>
                                <FormControlLabel
                                    control={<Checkbox name="rate_negiotable" />}
                                    label="Rate Negiotable" />
                            </Grid>
                        </Grid> 
                        {
                            !isPressedNext &&
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={formHandler.errors?.amount}
                                >
                                Next
                            </Button>
                        }
                        </Form>
                    )}
                </Formik>
                {
                    isPressedNext &&
                    <Formik
                    initialValues={initialValues_2}
                    onSubmit={handleSubmit_2}
                    validationSchema={SCHEMA_2}
                    enableReinitialize>
                        {(formHandler) => (
                            <Form>
                            {console.log(formHandler)}
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Box width={1}>
                                            <TextField 
                                                fullWidth
                                                type="number"
                                                label="Enter your 10 digits Mobile number"
                                                variant="outlined"
                                                name="mobile_number"
                                                onChange={formHandler.handleChange}
                                                error={formHandler.errors?.mobile_number}
                                                helperText={formHandler.errors?.mobile_number}                                        
                                            />
                                        </Box>
                                        <Box>
                                            <FormControlLabel control={<Checkbox name="checkedC" />} label="Get updates on" /> Whatsapp
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField 
                                            fullWidth
                                            label="Enter your Name*"
                                            variant="outlined"
                                            name="user_name"
                                            onChange={formHandler.handleChange}
                                            error={formHandler.errors?.user_name}
                                            helperText={formHandler.errors?.user_name}                                        
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField 
                                            fullWidth
                                            label="Enter Remarks (optional)"
                                            variant="outlined"
                                            name="remarks"
                                            onChange={formHandler.handleChange}
                                            error={formHandler.errors?.remarks}
                                            helperText={formHandler.errors?.remarks}                                        
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained" color="primary" type="submit">
                                            Verify via OTP
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                }
            </div>
        </div>
    )
}

export default Step2
