import React from "react";
import { MenuHrefStyle, MenuLinkStyle } from "./components";

export default function Menu(){
    return(
        <div>
            <MenuLinkStyle  to='/'>Home</MenuLinkStyle>
            <MenuLinkStyle to='/Setting'>Setting</MenuLinkStyle>
        </div>
        
        
        
    )
}