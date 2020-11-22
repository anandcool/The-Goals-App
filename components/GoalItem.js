import React from 'react'
import {Text,View,StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback} from 'react-native'

const GoalItem = (props) =>{
    return (
        <TouchableNativeFeedback activeOpacity={0.6} onPress={props.onDelete}>
        <View style={styles.listItem}>
        <Text>{props.title}</Text> 
       </View>
       </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        marginVertical:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1
      }
})

export default GoalItem