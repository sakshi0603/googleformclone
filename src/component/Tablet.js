 import React  from 'react'
//  import {muiStyled} from '@mui/styled-engine-sc';

 import Paper from '@mui/material/Paper'
 import Tabs from '@mui/material/Tabs'
 import Tab from '@mui/material/Tab';

// const useStyles= muiStyled({
// root:{
//     flexGrow:1,
// },
// tab:{
// fontSize:12,
// color:"#5f6368",
// textTransform:"capitalize",
// height:10,
// fontWeight:"600",
// fontFamily:'Google Sans,Roboto,AArial,sans-serif',
// },
// tabs:{
//     height:10
// },
// }
// )

 const Tablet = () => {
    // const classes = useStyles()
   return (
     <Paper >
        <Tabs
       
         textcolor='primary'
        indicateColor='primary'
        centered>
            <Tab label="Questions"  >

            </Tab>
            <Tab label='Response'  >
                
            </Tab>
        </Tabs>
     </Paper>
   )
 }
 
 export default Tablet
 