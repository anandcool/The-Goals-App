import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal,setEnteredGoal] = useState('')
  const [courseGoals,setCourseGoals] = useState([])
  
  const goalInputHandler = (text) =>{
    setEnteredGoal(text)
  } 
  const addGoalHandler = () =>{
    console.log("before",courseGoals)
    setCourseGoals(currentGoals=>[...currentGoals,enteredGoal])
    console.log("after",courseGoals)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Enter your Goals" 
        style={styles.textInput} 
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        
        <Button 
        title="Add"
        onPress={addGoalHandler}
        />
        <Button
        title="Test"
        onPress={()=>console.log("after",courseGoals)}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  },
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
});
