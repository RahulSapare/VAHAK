import React from 'react'
import Header from '../Header'

const Step4 = (props) => {
    const {pageStatus=4, headerText="Summary and Submit Bid"} = props
    return (
        <div>
            <Header headerText={headerText} pageStatus={pageStatus} />
        </div>
    )
}

export default Step4
