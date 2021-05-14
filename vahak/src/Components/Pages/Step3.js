import React from 'react'
import Header from '../Header'

const Step3 = (props) => {
    const {pageStatus=3, headerText="Verify OTP"} = props
    return (
        <div>
            <Header headerText={headerText} pageStatus={pageStatus} />
        </div>
    )
}

export default Step3
