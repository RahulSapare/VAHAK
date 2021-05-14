import React from 'react'
import Header from '../Header'

const Step2 = (props) => {
    const {pageStatus=2, headerText="Place your Bid"} = props
    return (
        <div>
            <Header headerText={headerText} pageStatus={pageStatus} />
        </div>
    )
}

export default Step2
