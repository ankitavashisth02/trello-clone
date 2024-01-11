import React,{useState} from 'react';
import Body from './Body';
import SideBar from './SideBar';
import Modal from './Modal';

const BodyContainer=()=>{

    const[modal , setModal] = useState(false);

    return(
        <React.Fragment>
        {modal && <Modal modal={modal} setModal={setModal}/>}
        <div className='body-container'>
        <SideBar/>
        <Body modal={modal} setModal={setModal}/>
        </div>
        </React.Fragment>
    )
}

export default BodyContainer;