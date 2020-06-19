import React from 'react'
import {View , StyleSheet, Button} from 'react-native'

const ScreenA = (props) => {
    return(
        <View style={styles.screen}>
        <Button title="Go Back" color="tomato"   onPress={() => props.navigation.goBack()}/>
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

export default ScreenA