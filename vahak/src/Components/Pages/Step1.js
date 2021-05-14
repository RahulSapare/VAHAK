import React, {Fragment} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {Label, FormGroup, Input, Button, Card, Alert} from 'reactstrap';
import Header from '../Header'

const Step1 = (props) => {
    const SCHEMA = Yup.object().shape({
        
    });

    const initialValues = {

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
                            <Fragment>

                            <FormGroup>
                                <div className="form-label-group">
                                    <Input type="text" id="userName" placeholder="Name hako boli magane" name="username" required autoFocus onChange={formHandler.handleChange}/>
                                    <Label for="userName">Name hako boli magane</Label>
                                </div>
                            </FormGroup>
                            </Fragment>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Step1
