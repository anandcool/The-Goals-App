import React,{useState} from 'react'
import {TextInput,View,StyleSheet,Button, Modal} from 'react-native'

const GoalInput = (props) =>{
    const [enteredGoal,setEnteredGoal] = useState('')
    
    const goalInputHandler = (text) =>{
        setEnteredGoal(text)
      } 

    const addGoalHandler = () =>{
      props.onAddGoal(enteredGoal);
      setEnteredGoal('')
    }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Enter your Goals" 
        style={styles.textInput} 
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
        <Button 
        title="Add"
        onPress={()=>addGoalHandler()}/>
        </View>
        <View style={styles.button}>
        <Button
        title="Cancel"
        color="red"
        onPress={()=>props.onCancel()}/>
        </View>
        </View>
      </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      textInput:{
        width:'80%',
        borderColor:'black',
        borderWidth:1,
        padding:5
      },
      btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%',
      },
      button:{
        marginTop:10,
        width:'40%'
      }
})

export default GoalInput