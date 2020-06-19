import React from 'react'
import {View , Button, StyleSheet} from 'react-native'
import {HeaderButtons , Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../Components/CustomHeaderButton'
const About = (props) => {

 
    props.navigation.setOptions({
        headerLeft : () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
            iconName="bars"
            iconSize={24}

            onPress={() => {props.navigation.toggleDrawer()}}
            />
        </HeaderButtons>
        )
    })
 


    return(
        <View style={styles.screen}>
        <Button title="Go to Screen A"  onPress={() => props.navigation.navigate('ScreenA')}/>
    </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1 , 
        justifyContent : 'center',
        alignItems : 'center'
    }
})



export default About