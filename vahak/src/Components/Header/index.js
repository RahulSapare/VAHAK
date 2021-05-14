import React from 'react'
import Logo from '../../Assets/Images/download.png'

const index = (props) => {
    const {headerText, pageStatus} = props;
    return (
        <div className = "header">
            <div className="logo mx-4">
                <img src={Logo} alt="Logo_VAHAK" />    
            </div>   
            <div className="header-text text-center py-5">
                <h3>
                    {`${headerText}(${pageStatus}/4 step)`}
                </h3>
            </div>   
        </div>
    )
}

export default index
