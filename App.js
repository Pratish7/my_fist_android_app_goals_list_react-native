import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandeler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandeler} />
      <FlatList
        keyExtractor={(item, index) => item.ib}
        data={courseGoals}
        renderItem={ itemData => <GoalItem onPress={() => console.log('works')} title={itemData.item.value} />}
      />
        
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

