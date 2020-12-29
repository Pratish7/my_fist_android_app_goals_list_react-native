import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandeler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  };

  const [isAddMode, setIsAddMode] = useState(false);

  const removeGoalHandeler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelAddGoalHandeler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandeler} onCancel={cancelAddGoalHandeler} />
      <FlatList
        keyExtractor={(item, index) => item.ib}
        data={courseGoals}
        renderItem={ itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandeler} title={itemData.item.value} />}
      />
        
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

