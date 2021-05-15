import React, { useState } from 'react'
import { PAGE_STATUS } from '../../Constants'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

const Pages = () => {

    const [adress, setAdress] = useState({})
    const [prizeAndDetails, setPrizeAndDetails] = useState({})
    const [otp, setOtp] = useState({
        field1: 1,
        field2: 2,
        field3: 3,
        field4: 4
    })

    const [pageStatus, setPageStatus] = useState(1)

    const RenderPage = (props) => {
        const { status } = props
        switch (status) {
            case PAGE_STATUS.step1:
                return <Step1
                    setAdress={setAdress}
                    setPageStatus={setPageStatus}
                />
            case PAGE_STATUS.step2:
                return <Step2
                    adress={adress}
                    setPrizeAndDetails={setPrizeAndDetails}
                    setPageStatus={setPageStatus}
                />
            case PAGE_STATUS.step3:
                return <Step3
                    otp={otp}
                    setOtp={setOtp}
                    adress={adress}
                    prizeAndDetails={prizeAndDetails}
                    setPageStatus={setPageStatus}
                />
            case PAGE_STATUS.step4:
                return <Step4
                    adress={adress}
                    setAdress={setAdress}
                    prizeAndDetails={prizeAndDetails}
                    setPageStatus={setPageStatus}
                />
            default:
                return <h1>Hai Rahul</h1>
        }
    }

    return (
        <>
            <RenderPage status={pageStatus} />
        </>
    )
}

export default Pages