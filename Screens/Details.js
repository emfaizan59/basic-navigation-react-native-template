import React from 'react'
import {View , Button, StyleSheet} from 'react-native'

const Details = (props) => {
    return(
        <View style={styles.screen}>
        <Button title="Go Back" color = "red"   onPress={() => props.navigation.goBack()}/>
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

export default Details