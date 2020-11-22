import React,{useState} from 'react'
import {TextInput,View,StyleSheet,Button} from 'react-native'

const GoalInput = (props) =>{
    const [enteredGoal,setEnteredGoal] = useState('')
    
    const goalInputHandler = (text) =>{
        setEnteredGoal(text)
        enteredGoal = "";
      } 

    return (
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Enter your Goals" 
        style={styles.textInput} 
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        
        <Button 
        title="Add"
        onPress={()=>props.onAddGoal(enteredGoal)}/>
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      textInput:{
        width:'80%',
        borderColor:'black',
        borderWidth:1,
        padding:5
      }
})

export default GoalInput