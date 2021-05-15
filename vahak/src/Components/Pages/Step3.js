import React, {useState} from 'react'
import {Divider, Grid, Box, Typography, Button } from '@material-ui/core';
import {EditOutlined as EditIcon} from '@material-ui/icons/';
import OtpInput from 'react-otp-input';
import Header from '../Header'

const Step3 = (props) => {
    const {pageStatus=3, headerText="Verify OTP", adress, prizeAndDetails, setPageStatus} = props

    // const defaultOTP = 1234
    const [OTP, setOTP] = useState()
    const [OTPerror, setOTPerror] = useState(false)

    const verifyOTP = (otp = OTP) => {
        if(otp === "1234"){
            setPageStatus(4)
        }else{
            setOTPerror(true)
        }
    }

    const handleOTPChange = (otp) => {
        setOTPerror(false)
        setOTP(otp)
        if(otp.length === 4){
            verifyOTP(otp)
        }
    }

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
                    </Grid>
                    <Grid xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="p">
                            We've sent an OTP to ypur mobile number. Please enter it below to submit your bid {prizeAndDetails?.mobile_number}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className="edit-icon">
                        <EditIcon /> Edit 
                    </Grid>
                    <Grid container item xs={12} justify="space-around">
                        <OtpInput
                            value={OTP}
                            onChange={handleOTPChange}
                            numInputs={4}
                            inputStyle="otp-inputStyle-normal"
                            errorStyle="otp-inputStyle-error"
                            hasErrored={OTPerror}
                            isInputNum
                        />
                    </Grid>

                    <Grid item xs={12} style={{marginTop:"2rem"}}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={verifyOTP}>
                            Verify via OTP
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Step3
