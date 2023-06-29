import React from 'react'
import'./Header.css'
// import MenuIcon from "@material-ui/icons/Menu"
import {IconButton} from '@mui/material'
import formimage from "../image/formIcon.svg"
import SearchIcon from "@mui/icons-material/Search"
import AppsIcon from"@mui/icons-material/Apps"
import Avatar from"@mui/material/Avatar"
// import Sidebar from "./Sidebar"
const Header = () => {
  return (
    <div className="header">
        <div className="header-info">
          {/* <Sidebar/> */}
          <img src={formimage} alt="logo"style={{height:'40px',width:'40px'}} />
       <div className="info">
        GetFly
       </div>
        </div>
        <div className="header-search">
        <IconButton><SearchIcon/></IconButton>
            <input type="text" name='search' placeholder='Search' />
        </div>
        <div className="header-right">
        <IconButton>
          <AppsIcon/>
          </IconButton>
          <IconButton>
          <Avatar/>
          </IconButton>
        </div>

      
    </div>
  )
}

export default Header
