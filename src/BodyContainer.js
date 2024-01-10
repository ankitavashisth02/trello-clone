import React from 'react';
import Body from './Body';
import SideBar from './SideBar';

const BodyContainer=()=>{
    return(
        <React.Fragment>
        <div className='body-container'>
        <SideBar/>
        <Body/>
        </div>
        </React.Fragment>
    )
}

export default BodyContainer;