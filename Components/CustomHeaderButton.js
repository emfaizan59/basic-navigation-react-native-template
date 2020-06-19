import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'
import { FontAwesome } from '@expo/vector-icons'; 
const CustomHeaderButton = props =>{
    return <HeaderButton 
    IconComponent={FontAwesome}
    iconSize ={24}
    {...props}
    color = 'white'
    />
}


export default CustomHeaderButton