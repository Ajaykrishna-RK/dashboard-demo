import React, { useState } from 'react'
import { NavLink} from "react-bootstrap"

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import routes from '../../routes/allRoutes';
import { Link,NavLink as NavLinkRRD } from 'react-router-dom';
import Dashboard from '../../views/dashboard/Dashboard';
import Products from '../../views/products/Products';

function Sidebar() {
  



    const [isVisible,setIsvisible] = useState(true)
  return (
    <div>



<SideNav expanded={isVisible} style={{backgroundColor:"orange",position:"fixed"}}>
        <SideNav.Toggle
          onClick={() => {
            setIsvisible(!isVisible)
          }}
        />

 <SideNav.Nav defaultSelected="/">
    {routes.map((item,key)=>(
 <NavItem key={key}>

<NavText >
  <Link to={item.path} style={{color:"#fff",fontSize:"25px" ,textDecoration:"none"}}>
  
  <i className={`${item.icon}`}></i>
  {/* {isVisible === false && `${item.icon}` }  {isVisible === true && `${item.name}`} */}
  </Link>
</NavText>

</NavItem>
    ))}
</SideNav.Nav>

        
       
      </SideNav>


    </div>
  )
}



export default Sidebar