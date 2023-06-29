import React from 'react'
import'./MainBody.css'
import StorageIcon from'@mui/icons-material/Storage';
import ArrowDropDownIcon from'@mui/icons-material/ArrowDropDown';
import FolderOpenIcon from'@mui/icons-material/FolderOpen';
import {IconButton}from'@mui/material';
// import MorevertIcon from '@material-ui/icons/MoreVert'
import tshirt from"../image/tshirt.png"
const MainBody = () => {
  return (
    <div className="main-body">
      <div className="mainbody-top">
      <div className="mainbody-top-left" style={{fontSize:"16px",fontWeight:"500"}}>
      Recent Forms
      </div>
      <div className="mainbody-top-right">
      <div className="mainbody-top-center" style={{fontSize:"14px",marginRight:"125px"}}>Owned By anyone<ArrowDropDownIcon/> </div>
      <IconButton>
        <StorageIcon style={{fontSize:"16px",color:"black"}}/>
      </IconButton>
      <IconButton>
      <FolderOpenIcon style={{fontSize:"16px",color:"black"}}/>
      </IconButton>
      </div>

      </div>
    <div className="mainbody-doc">
    <div className="doc-card">
      <img src={tshirt} alt='docimage' className="doc-image" />
     
    <div className="doc-card-content">
     
      <div className="doc-content" style={{fontSize:"12px",color:"grey"}}>
        <div className="content-left">
          <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"#6E2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/>Opened 6 mins ago
        </div>
        {/* <MorevertIcon style={{fontSize:"16px",color:"grey"}}/> */}
      </div>
    </div>
    </div>
    </div>
    </div>
 
  )
}

export default MainBody
