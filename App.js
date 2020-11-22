import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals,setCourseGoals] = useState([])
  
  const addGoalHandler = (goalTitle) =>{
    setCourseGoals(currentGoals=>[...currentGoals,{key:Math.random().toString(),value:goalTitle}])
  }

  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals =>{
      return currentGoals.filter(goal => goal.key !== goalId)
    })
    
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
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
