import React, {useState} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {Grid, Button, Typography, TextField, FormControlLabel, Checkbox, Box } from '@material-ui/core';
import {EditOutlined as EditIcon, WhatsApp as WhatsAppIcon} from '@material-ui/icons/';
import Header from '../Header'

const Step2 = (props) => {
    const {pageStatus=2, headerText="Place your Bid", adress, setPrizeAndDetails, setPageStatus} = props
    const [priceValue, setPriceValue] = useState({})

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
        setPriceValue({...value})
        setIsPressedNext(true)
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
        setPrizeAndDetails({...priceValue,...value})
        setPageStatus(3)
    }

    const [isPressedNext, setIsPressedNext] = useState(false)

    return (
        <div>
            <Header headerText={headerText} pageStatus={pageStatus} />
            <Box width={"70%"} mx="auto" my="2rem">
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
                                <Grid item className="edit-icon">
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
                                <Typography variant="h3" align="center" className="rupee-input">
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
                                            style={{width:"11rem"}}
                                            />
                                    }
                                </Typography>
                            </Grid>
                            <Grid item style={{margin:"auto"}}>
                                <FormControlLabel
                                    control={<Checkbox name="rate_negiotable" />}
                                    label="Rate Negiotable" />
                            </Grid>
                        </Grid> 
                        {
                            !isPressedNext &&
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={formHandler.errors?.amount? true: false}
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
                                <Grid container spacing={1}>
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
                                        <Box className="whatsapp-check">
                                            <FormControlLabel control={<Checkbox name="checkedC" />} label="Get updates on" />
                                            <Box component="span" className="whatsapp">
                                                <WhatsAppIcon /> Whatsapp
                                            </Box> 
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
                                        <Button variant="contained" color="primary" type="submit" fullWidth>
                                            Verify via OTP
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                }
            </Box>
        </div>
    )
}

export default Step2
