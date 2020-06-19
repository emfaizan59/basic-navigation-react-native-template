import React, { useState } from 'react';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import DrawerNavigation from './Navigation';


const fetchFont = () => {
  return Font.loadAsync({
    'oswald-reg' : require('./assets/Oswald-Regular.ttf'),
    'oswald-bold' : require('./assets/Oswald-Bold.ttf'),
    'odibee' : require('./assets/OdibeeSans-Regular.ttf'),
    'josef-reg' : require('./assets/JosefinSans-Regular.ttf'),
    'josef-bold' : require('./assets/JosefinSans-Bold.ttf')
  })
}

export default function App() {
const [fontLoaded , setFontLoaded] = useState(false)

if(!fontLoaded){
  return <AppLoading startAsync ={fetchFont} onFinish = {() => setFontLoaded(true)} onError={(err)=>{console.log(err)}} />
}
  return (<DrawerNavigation />);
}

