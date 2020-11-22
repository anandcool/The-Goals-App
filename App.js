import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals,setCourseGoals] = useState([])
  const [isAddMode,setIsAddMode] = useState(false);

  
  const addGoalHandler = (goalTitle) =>{
    setCourseGoals(currentGoals=>[...currentGoals,{key:Math.random().toString(),value:goalTitle}])
    setIsAddMode(false)
  }

  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals =>{
      return currentGoals.filter(goal => goal.key !== goalId)
    }) 
  }

  const cancelGoalAdditionHandler = () =>{
    setIsAddMode(false)
  }


  return (
    <View style={styles.screen}>
      <Button title="Add New Goal"  onPress={()=>setIsAddMode(true)}/>
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAdditionHandler} />
        <FlatList
        data = {courseGoals}
        renderItem= {itemData => <GoalItem onDelete={()=>removeGoalHandler(itemData.item.key)} title={itemData.item.value}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  }
});
