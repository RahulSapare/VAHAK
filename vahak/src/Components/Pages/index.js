import React from 'react'
import {PAGE_STATUS} from '../../Constants'
import Step1 from './Step1' 
import Step2 from './Step2' 
import Step3 from './Step3' 
import Step4 from './Step4'

const Pages = () => {

    const RenderPage = (props) => {
        const {status} = props
        switch (status) {
            case PAGE_STATUS.step1:
                return <Step1 />
            case PAGE_STATUS.step2:
                return <Step2 />
            case PAGE_STATUS.step3:
                return <Step3 />
            case PAGE_STATUS.step4:
                return <Step4 />
            default:
                return <h1>Hai Rahul</h1>
        }
    }

    return (
        <>
            <RenderPage status={1} />
        </>
    )
}

export default Pages