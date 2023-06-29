import React from 'react'
import"./Template.css"
import MorevertIcon from '@mui/icons-material/MoreVert'
import {IconButton} from '@mui/material'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import blank from "../image/blank.png"
import contact from "../image/contact.png"
import party from"../image/party.png"
import tshirt from"../image/tshirt.png"
import event from"../image/event.png"
import rsvp from"../image/rsvp.png"
import uuid from'react-uuid'
import {useNavigate} from 'react-router-dom';
const Templet = () => {
    const navigate=useNavigate();
    const createForm=()=>{
        const id=uuid();
        console.log(id);

        navigate('/Form/'+id)
    }
    return (
        <div className="templet-section">
            {/* <div className="templet-top">
                <div className="templet-left">
                    <span style={{fontSize:"16px",color:"#202124"}}>Start New Form</span>
                </div>
                <div className="templet-right">
                    <div className="galary-button">
                        Template gallery
                        <UnfoldMoreIcon/>
                    </div>
                    <IconButton>
                        <MorevertIcon/>
                    </IconButton>
                </div>
            </div> */}
            <div className="templet-body">
                <div className="card" onClick={createForm} >
                    <img src={blank} alt="blank" className='card-image'/>
                <p className='card-title'>Blank</p>
                </div>
                {/* <div className="card">
                    <img src={contact} alt="contact" className='card-image' />
                    <p className='card-title'>Contact Information</p>
                </div>
                <div className="card">
                    <img src={party} alt="" className='card-image'/>
                    <p className='card-title'>Party Invitation</p>
                </div>
                <div className="card">
                    <img src={tshirt} alt="" className='card-image'/>
                    <p className='card-title'>T-shirt Sign up</p>
                </div>
                <div className="card">
                    <img src={event} alt="" className='card-image'/>
                    <p className='card-title'>Event Registration</p>
                </div>
                <div className="card">
                    <img src={rsvp} alt="" className='card-image'/>
                    <p className='card-title'>RSVP</p>
                </div> */}
            </div>
        </div>
    )
}

export default Templet
