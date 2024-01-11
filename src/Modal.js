import './modal.css';

const Modal = ({modal, setModal})=>{

    const handleCloseOperation = ()=>{
        setModal(false);
    }

    return(
        <div className="modal">

            <div className='modal-navbar'>
                <div className='modal-navbar-one'>
                {<i class="fa-regular fa-keyboard"></i>}
                &nbsp;&nbsp;
                    rnea
                    <br/>
                    in list TO DO
                </div>
                <div></div>
                <div className='modal-navbar-three'>
                    <button onClick={handleCloseOperation}>close❎</button>
                </div>
            </div>

            <div className='modal-body-container'>
                <div className='modal-body'>
                    <div className='notification'>Notification</div>
                    <button className='watch'>
                        {<i class="fa-regular fa-eye"></i>}
                        &nbsp;&nbsp;
                        Watch</button>
                        <br/><br/>
                    <div className='description'>
                    {<i class="fa-solid fa-list"></i>}
                    &nbsp;&nbsp;
                    Description</div> 
                    <textarea placeholder="Description" rows="4"/>
                    <br/>
                    <button className='save'>Save</button>
                    <button className='cancel'>Cancel</button>
                    <br/><br/>

                    <div className='activity'>
                    {<i class="fa-solid fa-list"></i>}
                    &nbsp;&nbsp;
                    Activity</div>
                    {<i class="fa-regular fa-user"></i>}<textarea rows="1" placeholder='Write a comment...'/>
                </div>


                <div className='modal-sidebar'>
                <div>Add to Card</div>
                    <div className='modal-sidebar-one'>
                        <div>Members</div>
                        <div>Labels</div>
                        <div>Checklist</div>
                        <div>Dates</div>
                        <div>Attachment</div>
                        <div>Cover</div>
                        <div>Custom Field</div>
                    </div>

                    <div className='power-ups'>
                        Power Ups
                    </div>

                    <div className='automation'>
                        Automation
                    </div>

                    <div className='actions'>
                        <div>Move</div>
                        <div>Copy</div>
                        <div>Make Template</div>
                        <div>Archive</div>
                        <div>Share</div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Modal;