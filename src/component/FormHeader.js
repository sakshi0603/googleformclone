import React, { startTransition } from 'react'
import formimage from "../image/formIcon.svg"
import "./FormHeader.css"
import {FiStar,FiSettings}from "react-icons/fi"
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import {IconButton} from '@mui/material'
import {IoMdFolderOpen} from "react-icons/io" 

import ColorLensIcon from "@mui/icons-material/ColorLens"
import MorevertIcon from '@mui/icons-material/MoreVert'
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
const FormHeader = () => {
  return (
  
    <div className='form-header'>
      <div className="form-header-left">
        <img src={formimage} style={{height:"45px",width:"40px"}}/>
        <input type="text" placeholder="Untitled form" className='form-name' />
        <IoMdFolderOpen className="form-heade-icon" style ={{marginRight:"10px"}}></IoMdFolderOpen>
        <FiStar className ="form-header-icons" style={{marginRight:"10px"}}/>
        <span style={{fontSize:"12px",fontWeight:"600"}}>All changes saved in Drive</span>

      </div>
      <div className="form-header-right">
      <IconButton>
        <ColorLensIcon size='small' className='form-header-icon'/>
      </IconButton>

      <IconButton>
      <RemoveRedEyeOutlinedIcon classsName="form-header-icon" />
      </IconButton>

      <IconButton>
        <FiSettings classsName="form-header-icon" />
      </IconButton>
      <Button varient="contained" color='primary' href="#contained-button">Send</Button>
        <IconButton>
          <MorevertIcon classsName="form-header-icon" />
        </IconButton>

        <IconButton>
          <Avatar style={{height:"30px",width:"30px"}} />
        </IconButton>
      </div>
    </div>
  ) }

export default FormHeader
